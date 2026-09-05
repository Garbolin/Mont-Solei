import { Mail, MapPin, Phone } from 'lucide-react';
import Instagram from '@/assets/Instagram.svg?react';
import Pinterest from '@/assets/Pinterest.svg?react';
import Telegram from '@/assets/Telegram.svg?react';
import { useInView } from '@/hooks/useInView';

export default function SocialsSection() {
    const { ref, isInView } = useInView<HTMLElement>();
    const fadeClass = () =>
        `transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`;

    const fadeStyle = (delayMs: number) => ({
        transitionDelay: isInView ? `${delayMs}ms` : '0ms',
    });
    return (
        <section className="flex flex-col gap-10" ref={ref}>
            <div
                className={`flex min-w-0 items-center justify-start gap-4 ${fadeClass()}`}
                style={fadeStyle(250)}
            >
                <Mail strokeWidth={1} />
                <div className="flex flex-col gap-1">
                    <p className="font-semibold uppercase text-xs">EMAIL</p>
                    <p className="wrap-break-word font-light text-sm">holaquetal@gmail.com</p>
                </div>
            </div>
            <div
                className={`flex min-w-0 items-center justify-start gap-4 ${fadeClass()}`}
                style={fadeStyle(350)}
            >
                <Phone strokeWidth={1} />
                <div className="flex flex-col gap-1">
                    <p className="font-semibold uppercase text-xs">TELÉFONO</p>
                    <p className="font-light text-sm">+34 603 92 38 40</p>
                </div>
            </div>
            <div
                className={`flex min-w-0 items-center justify-start gap-4 ${fadeClass()}`}
                style={fadeStyle(450)}
            >
                <MapPin strokeWidth={1} />
                <div className="flex flex-col gap-1">
                    <p className="font-semibold uppercase text-xs">UBICACIÓN</p>
                    <p className="wrap-break-word font-light text-sm">LoremIpsumNoseque, Ecuador</p>
                </div>
            </div>
            <div
                className={`flex min-w-0 items-center justify-start gap-4 ${fadeClass()}`}
                style={fadeStyle(550)}
            >
                <MapPin className="opacity-0" />
                <div className="flex flex-col gap-2">
                    <p className="font-semibold uppercase text-xs">REDES SOCIALES</p>
                    <div className="flex gap-4">
                        <Telegram className="w-7 h-7 text-graphite-500 hover:text-terracotta-500 transition-colors duration-200" />
                        <Instagram className="w-7 h-7 text-graphite-500 hover:text-terracotta-500 transition-colors duration-200" />
                        <Pinterest className="w-7 h-7 text-graphite-500 hover:text-terracotta-500 transition-colors duration-200" />
                    </div>
                </div>
            </div>
        </section>
    );
}
