import { useEffect, useRef } from 'react';
import { useNavbarTheme } from '@/context/NavbarThemeContext';

export default function HeroSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { setTheme } = useNavbarTheme();

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => setTheme(entry.isIntersecting ? 'light' : 'dark'),
            { rootMargin: '-64px 0px 0px 0px', threshold: 0 },
        );

        observer.observe(el);
        return () => {
            observer.disconnect();
            setTheme('dark'); // reset al salir de Home
        };
    }, [setTheme]);

    return (
        <section
            ref={ref}
            className="relative bg-[url('/images/hero_image.png')] bg-cover bg-center"
            style={{ height: 'calc(100vh + 80px)' }}
        >
            <div className="absolute inset-0 bg-linear-to-t from-black/35 from-20% to-transparent to-50%"></div>
            <div className="flex flex-col items-center justify-end h-full text-center pb-[120px] gap-3">
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
                className="absolute bottom-0 left-0 w-full"
                style={{ height: '80px' }}
            >
                <path d="M0,180 C600,21 600,21 1200,180 L1200,180 L0,180 Z" fill="#f7f6f0" />
            </svg>
        </section>
    );
}
