import { useEffect, useRef } from 'react';

type Circle = {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    radius: number;
    color: string;
    driftX: number;
    driftY: number;
    driftAngle: number;
    driftSpeed: number;
};

const COLORS = [
    'rgba(176, 108, 104, 0.15)', // rosa pastel
    'rgba(213, 197, 173, 0.25)', // azul pastel
];

export default function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const circlesRef = useRef<Circle[]>([]);
    const mouseRef = useRef({ x: -9999, y: -9999 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
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
            const count = Math.floor((width * height) / 70000);
            const minDistance = 180;
            const maxAttempts = 80;

            while (circles.length < count) {
                let placed = false;

                for (let attempt = 0; attempt < maxAttempts; attempt++) {
                    const x = Math.random() * width;
                    const y = Math.random() * height;

                    const tooClose = circles.some((c) => {
                        const dx = c.baseX - x;
                        const dy = c.baseY - y;
                        return Math.sqrt(dx * dx + dy * dy) < minDistance;
                    });

                    if (!tooClose) {
                        circles.push({
                            x,
                            y,
                            baseX: x,
                            baseY: y,
                            radius: 35 + Math.random() * 70,
                            color: COLORS[circles.length % COLORS.length],
                            driftX: 0,
                            driftY: 0,
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
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        const MOUSE_RADIUS = 220; // radio de influencia del cursor
        const REPEL_STRENGTH = 35; // qué tanto se aparta el círculo
        const RETURN_SPEED = 0.03; // qué tan rápido vuelve a su sitio
        const DRIFT_RADIUS = 25; // movimiento propio, ambiental

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            const { x: mx, y: my } = mouseRef.current;

            for (const c of circlesRef.current) {
                // Movimiento propio (deriva lenta, tipo respiración)
                c.driftAngle += c.driftSpeed * 0.1;
                const driftX = Math.cos(c.driftAngle) * DRIFT_RADIUS;
                const driftY = Math.sin(c.driftAngle * 0.8) * DRIFT_RADIUS;

                const targetX = c.baseX + driftX;
                const targetY = c.baseY + driftY;

                // Repulsión del mouse
                const dx = targetX - mx;
                const dy = targetY - my;
                const dist = Math.sqrt(dx * dx + dy * dy);

                let offsetX = 0;
                let offsetY = 0;

                if (dist < MOUSE_RADIUS) {
                    const force = (1 - dist / MOUSE_RADIUS) * REPEL_STRENGTH;
                    const angle = Math.atan2(dy, dx);
                    offsetX = Math.cos(angle) * force;
                    offsetY = Math.sin(angle) * force;
                }

                // Interpolación suave hacia la posición objetivo (con repulsión)
                c.x += (targetX + offsetX - c.x) * RETURN_SPEED * 3;
                c.y += (targetY + offsetY - c.y) * RETURN_SPEED * 3;

                ctx.beginPath();
                ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
                ctx.fillStyle = c.color;
                ctx.filter = 'blur(2px)';
                ctx.fill();
            }

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ filter: 'blur(10px)' }}
        />
    );
}
