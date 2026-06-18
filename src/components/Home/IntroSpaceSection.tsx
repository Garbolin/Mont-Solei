import { ChevronRight } from 'lucide-react';
import SpaceCarousel from './SpaceCarousel';

export default function IntroSpaceSection() {
    return (
        <section className="flex flex-col gap-6 h-fit w-full bg-porcelain-500 items-center justify-center py-20">
            <div className="flex gap-6 h-fit w-[80%] items-center justify-around">
                <h2 className="w-2/3 font-raleway italic text-graphite-500 font-light text-[20px] max-w-2xl">
                    Rodeado de belleza natural y cuidado hasta el último detalle, nuestro espacio
                    acoge celebraciones llenas de emoción, autenticidad y encanto.
                </h2>
                <button className="w-40 flex items-center justify-center border-2 py-1 border-paleoak-500 text-paleoak-500 rounded-2xl gap-6 h-fit hover:bg-paleoak-500 hover:text-white transition-all duration-300">
                    <p className="uppercase font-raleway font-bold text-sm">Ver más</p>
                    <ChevronRight strokeWidth={2} className="" />
                </button>
            </div>
            <SpaceCarousel />
        </section>
    );
}
