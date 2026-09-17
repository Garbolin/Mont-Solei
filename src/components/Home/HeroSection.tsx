import { useEffect, useRef, useState } from 'react';
import { useNavbarTheme } from '@/context/NavbarThemeContext';
import { useInView } from '@/hooks/useInView';

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const { setTheme } = useNavbarTheme();
    const [sectionHeight, setSectionHeight] = useState<number | null>(null);

    const { ref, isInView } = useInView<HTMLElement>();

    const setRefs = (el: HTMLElement | null) => {
        sectionRef.current = el;
        ref.current = el;
    };

    const fadeClass = () =>
        `transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`;

    const fadeStyle = (delayMs: number) => ({
        transitionDelay: isInView ? `${delayMs}ms` : '0ms',
    });

    // Fija la altura real del viewport en px, evitando que 100dvh
    // se recalcule (y genere jank) durante el propio scroll en iOS.
    useEffect(() => {
        const updateHeight = () => {
            setSectionHeight(window.innerHeight + 80);
        };

        updateHeight();

        // Solo recalculamos en resize real (rotación, teclado, etc.),
        // nunca durante el scroll.
        window.addEventListener('resize', updateHeight);
        window.addEventListener('orientationchange', updateHeight);
        return () => {
            window.removeEventListener('resize', updateHeight);
            window.removeEventListener('orientationchange', updateHeight);
        };
    }, []);

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

            if (rect.bottom > 0 && rect.top < window.innerHeight) {
                const progress = -rect.top;

                bg.style.transform = `translate3d(0, ${progress * 0.35}px, 0)`;

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
    }, [sectionHeight]);

    return (
        <section
            ref={setRefs}
            className="relative overflow-hidden"
            style={{ height: sectionHeight ? `${sectionHeight}px` : '100dvh' }}
        >
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
                className="flex flex-col items-center justify-center md:justify-end h-full text-center gap-3 px-4 will-change-transform pb-[env(safe-area-inset-bottom,0px)] md:pb-[120px]"
            >
                <div className="relative z-10 justify-center text-center">
                    <h1
                        className={`text-3xl sm:text-4xl md:text-5xl font-light text-porcelain-500 mb-4 font-cormorant uppercase ${fadeClass()}`}
                    >
                        Celebre la magia de estar juntos
                    </h1>
                </div>
                <div className="relative z-10 justify-center text-center">
                    <h2
                        className={`text-base sm:text-lg md:text-xl max-w-xs sm:max-w-xl md:max-w-3xl font-light text-porcelain-500 mb-4 font-raleway italic ${fadeClass()}`}
                        style={fadeStyle(150)}
                    >
                        En un entorno natural incomparable, cada celebración encuentra la belleza,
                        la intimidad y la exclusividad que merece.
                    </h2>
                </div>
            </div>

            <svg
                viewBox="0 0 1200 180"
                preserveAspectRatio="none"
                className="absolute bottom-0 left-0 w-full h-[50px] sm:h-[65px] md:h-[80px] z-10"
            >
                <path
                    d="M0,180 C600,120 600,120 1200,180 L1200,180 L0,180 Z"
                    fill="#f7f6f0"
                    className="md:hidden"
                />
                <path
                    d="M0,180 C600,21 600,21 1200,180 L1200,180 L0,180 Z"
                    fill="#f7f6f0"
                    className="hidden md:block"
                />
            </svg>
        </section>
    );
}
