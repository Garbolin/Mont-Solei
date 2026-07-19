import ValueCard from './ValueCard';
import Flower from '@/assets/flower.svg';
import Wheat from '@/assets/wheat.svg';
import Volcano from '@/assets/volcano.svg';
import Sunset from '@/assets/sunset.svg';
import Button from '@/components/Button';

export default function IntroHistory() {
    return (
        <section className="flex flex-col gap-10 h-fit w-full bg-olive-500 items-center justify-center py-20">
            <div className="flex flex-col gap-8 h-fit w-[70%] items-start justify-start">
                <h2 className="font-cormorant uppercase italic text-porcelain-500 font-regular text-3xl">
                    Nuestra forma de estar
                </h2>
                <h3 className="font-raleway text-porcelain-500 font-light italic text-md max-w-2xl">
                    No somos un equipo de eventos. Somos guardianes de un territorio y anfitriones
                    de momentos que no se olvidan. Conoce la historia que hay detrás.
                </h3>
                <Button
                    text="Conoce nuestra historia"
                    link="/history"
                    filled={false}
                    color="porcelain"
                    textColor="olive"
                    py="2"
                />
            </div>
            <div className="h-px w-[70%] bg-porcelain-500/10"></div>
            <div className="grid grid-cols-4 gap-3 h-full w-full max-w-5xl mx-auto">
                <ValueCard
                    title="Presencia plena"
                    description="Cada huésped recibe nuestra atención completa"
                    icon={Flower}
                />
                <ValueCard
                    title="Acompañar de verdad"
                    description="Los mejores detalles son los que el cliente no ve, pero siente."
                    icon={Wheat}
                />
                <ValueCard
                    title="Parte del territorio"
                    description="Actuamos como parte del ecosistema, no como dueños de él."
                    icon={Volcano}
                />
                <ValueCard
                    title="Cuidado genuino"
                    description="Nos importa cómo se siente la persona, no solo si todo salió bien."
                    icon={Sunset}
                />
            </div>
        </section>
    );
}
