import IntroEventTypes from '@/components/Home/IntroEventTypes';
import Logo from '@/assets/logo2.svg?react';
import Flower from '@/assets/flower.svg';
import Wheat from '@/assets/wheat.svg';
import Volcano from '@/assets/volcano.svg';
import { useInView } from '@/hooks/useInView';

export default function IntroSection() {
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
            ref={ref}
            className="bg-porcelain-500 h-fit pb-10 w-full gap-3 flex flex-col items-center justify-center -pt-20"
        >
            <div
                className={`w-40 text-graphite-500/80 flex items-center justify-center ${fadeClass()}`}
                style={fadeStyle(0)}
            >
                <Logo className="w-40 h-40" />
            </div>

            <div
                className={`w-px bg-graphite-500/60 h-[150px] my-6 ${fadeClass()}`}
                style={fadeStyle(150)}
            ></div>

            <div className="flex flex-col items-center justify-center gap-20 w-full">
                <h2
                    className={`uppercase max-w-xl text-center text-3xl text-graphite-500 italic font-cormorant font-regular text-pretty ${fadeClass()}`}
                    style={fadeStyle(300)}
                >
                    Todo momento especial merece una gran celebración
                </h2>

                <div className="flex items-center justify-center h-fit gap-10">
                    <div className={fadeClass()} style={fadeStyle(450)}>
                        <IntroEventTypes
                            title="CEREMONIAS Y BODAS"
                            description="Bodas íntimas, renovaciones de votos y momentos de unión"
                            icon={Flower}
                        />
                    </div>

                    <div className="w-px bg-graphite-500/10 h-[160px]"></div>

                    <div className={fadeClass()} style={fadeStyle(600)}>
                        <IntroEventTypes
                            title="Familias y celebraciones"
                            description="Los mejores detalles son los que el cliente no ve, pero siente"
                            icon={Wheat}
                        />
                    </div>

                    <div className="w-px bg-graphite-500/10 h-[160px]"></div>

                    <div className={fadeClass()} style={fadeStyle(750)}>
                        <IntroEventTypes
                            title="Experiencias"
                            description="Actuamos como parte del ecosistema, no como dueños de él"
                            icon={Volcano}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
