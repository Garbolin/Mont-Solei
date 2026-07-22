import Button from '@/components/Button';
import { useInView } from '@/hooks/useInView';

export default function CallToActionSection() {
    const { ref, isInView } = useInView<HTMLElement>();

    // helper para no repetir clases
    const fadeClass = () =>
        `transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`;

    const fadeStyle = (delayMs: number) => ({
        transitionDelay: isInView ? `${delayMs}ms` : '0ms',
    });

    return (
        <section className="bg-parchment-500 w-full h-[50vh] items-center justify-center" ref={ref}>
            <div className="flex flex-col gap-8 mx-auto w-[70%] items-center justify-center h-full">
                <h2
                    className={`font-cormorant text-graphite-500 font-semibold text-4xl ${fadeClass()}`}
                    style={fadeStyle(200)}
                >
                    Su día especial comienza aquí
                </h2>
                <p
                    className={`text-center font-raleway text-graphite-500 font-light italic text-lg text-pretty max-w-2xl ${fadeClass()}`}
                    style={fadeStyle(400)}
                >
                    Comparta con nosotros los detalles de su celebración y le acompañaremos en cada
                    paso para hacerla realidad.
                </p>
                <div className={fadeClass()} style={fadeStyle(600)}>
                    <Button
                        text="SOLICITAR INFORMACIÓN"
                        link="/contact"
                        filled={true}
                        color="terracotta"
                        py="2"
                    />
                </div>
            </div>
        </section>
    );
}
