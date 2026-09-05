import SpaceCarousel from './SpaceCarousel';
import Button from '@/components/Button';
import { useInView } from '@/hooks/useInView';

export default function IntroSpaceSection() {
    const { ref, isInView } = useInView<HTMLElement>();

    // helper para no repetir clases
    const fadeClass = () =>
        `transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`;

    return (
        <section
            className="flex flex-col gap-6 h-fit w-full bg-porcelain-500 items-center justify-center py-12 sm:py-16 md:py-20"
            ref={ref}
        >
            <div
                className={`flex flex-col md:flex-row gap-4 md:gap-6 h-fit w-[90%] md:w-[80%] items-center md:items-center justify-center md:justify-around ${fadeClass()}`}
            >
                <h2 className="w-full md:w-2/3 text-center md:text-left font-raleway italic text-graphite-500 font-light text-base sm:text-lg md:text-[20px] max-w-2xl">
                    Rodeado de belleza natural y cuidado hasta el último detalle, nuestro espacio
                    acoge celebraciones llenas de emoción, autenticidad y encanto.
                </h2>
                <Button text="Ver más" link="/contact" filled={false} color="paleoak" py="1" />
            </div>
            <SpaceCarousel />
        </section>
    );
}
