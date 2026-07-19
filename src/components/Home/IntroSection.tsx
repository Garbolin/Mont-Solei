import IntroEventTypes from '@/components/Home/IntroEventTypes';
import Logo from '@/assets/logo.svg?react';
import Flower from '@/assets/flower.svg';
import Wheat from '@/assets/wheat.svg';
import Volcano from '@/assets/volcano.svg';

export default function IntroSection() {
    return (
        <section className="bg-porcelain-500 h-fit pb-10 w-full gap-7 flex flex-col items-center justify-center -pt-20">
            <div className="w-50 flex items-center justify-center">
                <Logo className="w-50 h-50" />
            </div>
            <div className="w-px bg-graphite-500/60 h-[150px] my-6"></div>
            <div className="flex flex-col items-center justify-center gap-20 w-full">
                <h2 className="uppercase max-w-xl text-center text-3xl text-graphite-500 italic font-cormorant font-regular text-pretty ">
                    Todo momento especial merece una gran celebración
                </h2>
                <div className="flex items-center justify-center h-fit gap-10">
                    <IntroEventTypes
                        title="CEREMONIAS Y BODAS"
                        description="Bodas íntimas, renovaciones de votos y momentos de unión"
                        icon={Flower}
                    />

                    <div className="w-px bg-graphite-500/10 h-[160px]"></div>

                    <IntroEventTypes
                        title="Familias y celebraciones"
                        description="Los mejores detalles son los que el cliente no ve, pero siente"
                        icon={Wheat}
                    />
                    <div className="w-px bg-graphite-500/10 h-[160px]"></div>

                    <IntroEventTypes
                        title="Experiencias"
                        description="Actuamos como parte del ecosistema, no como dueños de él"
                        icon={Volcano}
                    />
                </div>
            </div>
        </section>
    );
}
