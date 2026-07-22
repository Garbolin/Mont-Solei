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
            className="flex flex-col gap-6 h-fit w-full bg-porcelain-500 items-center justify-center py-20"
            ref={ref}
        >
            <div className={`flex gap-6 h-fit w-[80%] items-center justify-around ${fadeClass()}`}>
                <h2 className="w-2/3 font-raleway italic text-graphite-500 font-light text-[20px] max-w-2xl">
                    Rodeado de belleza natural y cuidado hasta el último detalle, nuestro espacio
                    acoge celebraciones llenas de emoción, autenticidad y encanto.
                </h2>
                <Button text="Ver más" link="/contact" filled={false} color="paleoak" py="1" />
            </div>
            <SpaceCarousel />
        </section>
    );
}
