import SpaceCarousel from './SpaceCarousel';
import Button from '@/components/Button';

export default function IntroSpaceSection() {
    return (
        <section className="flex flex-col gap-6 h-fit w-full bg-porcelain-500 items-center justify-center py-20">
            <div className="flex gap-6 h-fit w-[80%] items-center justify-around">
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
