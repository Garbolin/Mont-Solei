import { useEffect, useRef } from 'react';

type Circle = {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    radius: number;
    color: string;
    driftAngle: number;
    driftSpeed: number;
};

type Props = {
    active: boolean;
};

const COLORS = [
    'rgba(176, 108, 104, 0.15)', // rosa pastel
    'rgba(213, 197, 173, 0.25)', // azul pastel
];

export default function InteractiveBackground({ active }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const circlesRef = useRef<Circle[]>([]);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const running = useRef(active);
    const animateRef = useRef<((time?: number) => void) | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        let lastFrameTime = 0;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const createCircles = () => {
            const circles: Circle[] = [];
            const area = width * height;

            const density = window.innerWidth < 768 ? 120000 : 80000;
            const count = Math.floor(area / density);

            const minDistance = 180;
            const minDistanceSq = minDistance * minDistance;
            const maxAttempts = 80;

            while (circles.length < count) {
                let placed = false;

                for (let attempt = 0; attempt < maxAttempts; attempt++) {
                    const x = Math.random() * width;
                    const y = Math.random() * height;

                    const tooClose = circles.some((c) => {
                        const dx = c.baseX - x;
                        const dy = c.baseY - y;
                        return dx * dx + dy * dy < minDistanceSq;
                    });

                    if (!tooClose) {
                        circles.push({
                            x,
                            y,
                            baseX: x,
                            baseY: y,
                            radius: 35 + Math.random() * 70,
                            color: COLORS[circles.length % COLORS.length],
                            driftAngle: Math.random() * Math.PI * 1.5,
                            driftSpeed: 0.08 + Math.random() * 0.25,
                        });
                        placed = true;
                        break;
                    }
                }

                if (!placed) break;
            }

            circlesRef.current = circles;
        };

        resize();
        createCircles();

        const handleResize = () => {
            resize();
            createCircles();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -9999, y: -9999 };
        };

        window.addEventListener('resize', handleResize);

        const isFinePointer = window.matchMedia('(pointer: fine)').matches;
        if (isFinePointer) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseleave', handleMouseLeave);
        }

        const handleVisibilityChange = () => {
            if (!document.hidden && running.current && animateRef.current) {
                animationId = requestAnimationFrame(animateRef.current);
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        const MOUSE_RADIUS = 220;
        const MOUSE_RADIUS_SQ = MOUSE_RADIUS * MOUSE_RADIUS;
        const REPEL_STRENGTH = 35;
        const RETURN_SPEED = 0.03;
        const DRIFT_RADIUS = 25;

        const animate = (currentTime: number = 0) => {
            if (!running.current || document.hidden) return;

            if (currentTime - lastFrameTime < 33) {
                animationId = requestAnimationFrame(animate);
                return;
            }
            lastFrameTime = currentTime;

            ctx.clearRect(0, 0, width, height);

            const { x: mx, y: my } = mouseRef.current;

            for (const c of circlesRef.current) {
                c.driftAngle += c.driftSpeed * 0.1;
                const driftX = Math.cos(c.driftAngle) * DRIFT_RADIUS;
                const driftY = Math.sin(c.driftAngle * 0.8) * DRIFT_RADIUS;

                const targetX = c.baseX + driftX;
                const targetY = c.baseY + driftY;

                const dx = targetX - mx;
                const dy = targetY - my;

                const distSq = dx * dx + dy * dy;

                let offsetX = 0;
                let offsetY = 0;

                if (distSq < MOUSE_RADIUS_SQ) {
                    const dist = Math.sqrt(distSq);
                    const force = (1 - dist / MOUSE_RADIUS) * REPEL_STRENGTH;

                    const invDist = 1 / (dist || 1);
                    offsetX = dx * invDist * force;
                    offsetY = dy * invDist * force;
                }

                c.x += (targetX + offsetX - c.x) * RETURN_SPEED * 3;
                c.y += (targetY + offsetY - c.y) * RETURN_SPEED * 3;

                ctx.beginPath();
                ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
                ctx.fillStyle = c.color;
                ctx.fill();
            }

            animationId = requestAnimationFrame(animate);
        };

        // Guardamos la función animate en una ref para invocarla desde fuera
        animateRef.current = animate;

        if (running.current) {
            animationId = requestAnimationFrame(animate);
        }

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
            if (isFinePointer) {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseleave', handleMouseLeave);
            }
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    // Este efecto reacciona al cambio de `active` (por ejemplo, cuando el IntersectionObserver entra en vista)
    useEffect(() => {
        const wasRunning = running.current;
        running.current = active && !document.hidden;

        // Si pasa a activo y no estaba corriendo antes, iniciamos la animación inmediatamente
        if (running.current && !wasRunning && animateRef.current) {
            requestAnimationFrame(animateRef.current);
        }
    }, [active]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ filter: 'blur(4px)' }}
        />
    );
}
