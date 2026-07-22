import TestimonialsCarousel from '@/components/Home/TestimonialsCarousel';
import { useInView } from '@/hooks/useInView';

export default function TestimonialsSection() {
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
        <section
            className="flex flex-col w-full h-[80vh] mx-auto items-center justify-center gap-6 bg-porcelain-500 "
            ref={ref}
        >
            <div className="flex flex-col w-[70%] items-start justify-center gap-6">
                <h2
                    className={`pl-6 font-cormorant uppercase italic text-graphite-500 font-regular text-3xl ${fadeClass()}`}
                    style={fadeStyle(200)}
                >
                    Experiencias que hablan por sí solas
                </h2>
                <h3
                    className={`pl-6 font-raleway text-graphite-500 font-light italic text-md max-w-2xl ${fadeClass()}`}
                    style={fadeStyle(400)}
                >
                    Cada celebración es única. Conozca las historias de quienes hicieron de este
                    lugar el escenario de sus recuerdos más especiales.
                </h3>
                <div
                    className={`p-6 w-full flex items-center justify-center ${fadeClass()}`}
                    style={fadeStyle(600)}
                >
                    <TestimonialsCarousel />
                </div>
            </div>
        </section>
    );
}
