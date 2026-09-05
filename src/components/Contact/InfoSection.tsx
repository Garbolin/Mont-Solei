import SocialsSection from '@/components/Contact/SocialsSection';
import { useInView } from '@/hooks/useInView';

export default function InfoSection() {
    const { ref, isInView } = useInView<HTMLElement>();
    const fadeClass = () =>
        `transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`;

    const fadeStyle = (delayMs: number) => ({
        transitionDelay: isInView ? `${delayMs}ms` : '0ms',
    });

    return (
        <section className="flex w-full max-w-md flex-col gap-5" ref={ref}>
            <div className="flex flex-col gap-12 sm:gap-15">
                <div className={`max-w-md ${fadeClass()}`} style={fadeStyle(150)}>
                    <p>
                        Estamos aquí para transformar su visión en una realidad inolvidable.
                        Visitenos o escribanos para comenzar a planificar su próximo hito.
                    </p>
                </div>
                <SocialsSection />
            </div>
            <div className="h-px w-full bg-paleoak-500"></div>
            <div className={`max-w-md ${fadeClass()}`} style={fadeStyle(650)}>
                <p>
                    Sin compromiso, solo una conversación para ver si encajamos. Lunes a Viernes, 9h
                    a 18h. Respondemos en 24 horas.
                </p>
            </div>
        </section>
    );
}
