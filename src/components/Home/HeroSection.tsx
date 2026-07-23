import { useEffect, useRef } from 'react';
import { useNavbarTheme } from '@/context/NavbarThemeContext';

export default function HeroSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null); // ← Este ref no estaba conectado en el JSX
    const contentRef = useRef<HTMLDivElement>(null);
    const { setTheme } = useNavbarTheme();

    // Navbar theme
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => setTheme(entry.isIntersecting ? 'light' : 'dark'),
            { rootMargin: '-64px 0px 0px 0px', threshold: 0 },
        );

        observer.observe(el);
        return () => {
            observer.disconnect();
            setTheme('dark');
        };
    }, [setTheme]);

    // Parallax
    useEffect(() => {
        const section = sectionRef.current;
        const bg = bgRef.current;
        const content = contentRef.current;
        if (!section || !bg || !content) return;

        let ticking = false;

        const update = () => {
            const rect = section.getBoundingClientRect();

            // Solo calculamos si la sección es visible en la pantalla
            if (rect.bottom > 0 && rect.top < window.innerHeight) {
                const progress = -rect.top; // 0 al estar arriba

                // Mueve el fondo más lento
                bg.style.transform = `translate3d(0, ${progress * 0.35}px, 0)`;

                // El texto se desvanece y sube al salir
                const fade = Math.max(1 - progress / 400, 0);
                content.style.opacity = `${fade}`;
                content.style.transform = `translate3d(0, ${progress * 0.15}px, 0)`;
            }

            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden"
            style={{ height: 'calc(100vh + 80px)' }}
        >
            {/* AGREGADO: ref={bgRef} y will-change-transform para fluidez */}
            <div ref={bgRef} className="absolute inset-0 overflow-hidden will-change-transform">
                <img
                    src="/images/hero_image.webp"
                    alt=""
                    fetchPriority="high"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ top: '-15%', height: '130%' }}
                />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-black/35 from-20% to-transparent to-50%"></div>

            <div
                ref={contentRef}
                className="flex flex-col items-center justify-end h-full text-center pb-[120px] gap-3 will-change-transform"
            >
                <div className="relative z-10 justify-center text-center">
                    <h1 className="text-5xl font-light text-porcelain-500 mb-4 font-cormorant uppercase">
                        Celebre la magia de estar juntos
                    </h1>
                </div>
                <div className="relative z-10 justify-center text-center">
                    <h2 className="text-xl max-w-3xl font-light text-porcelain-500 mb-4 font-raleway italic">
                        En un entorno natural incomparable, cada celebración encuentra la belleza,
                        la intimidad y la exclusividad que merece.
                    </h2>
                </div>
            </div>

            <svg
                viewBox="0 0 1200 180"
                preserveAspectRatio="none"
                className="absolute bottom-0 left-0 w-full z-10"
                style={{ height: '80px' }}
            >
                <path d="M0,180 C600,21 600,21 1200,180 L1200,180 L0,180 Z" fill="#f7f6f0" />
            </svg>
        </section>
    );
}
