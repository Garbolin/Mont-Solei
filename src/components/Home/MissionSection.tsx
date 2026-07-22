import MissionCard from '@/components/Home/MissionCard';
import { Flower, HeartHandshake, MapPinCheckInside, Sprout } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function MissionSection() {
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
            className="flex flex-col gap-6 h-fit w-full bg-porcelain-500 items-center justify-center py-10"
            ref={ref}
        >
            <div className="h-px w-[70%] bg-graphite-500/10"></div>
            <div className="flex flex-col gap-6 h-full w-full py-10 max-w-4xl mx-auto items-center justify-center">
                <h2
                    className={`mb-10 uppercase max-w-xl text-center text-3xl text-graphite-500 italic font-cormorant font-regular text-pretty ${fadeClass()}`}
                >
                    NUESTRA MISIÓN ES CREAR UNA EXPERIENCIA INOLVIDABLE
                </h2>
                <div className={`grid grid-cols-2 gap-10 h-full w-full max-w-5xl mx-auto`}>
                    <MissionCard
                        title="Momentos que unen"
                        description="Diseñamos experiencias pensadas para compartir, conectar y celebrar junto a quienes más importan."
                        icon={HeartHandshake}
                        className={fadeClass()}
                        style={fadeStyle(200)}
                    />
                    <MissionCard
                        title="Un solo lugar para ustedes"
                        description="Creemos en la exclusividad verdadera: una celebración, un espacio, una historia."
                        icon={MapPinCheckInside}
                        className={fadeClass()}
                        style={fadeStyle(300)}
                    />
                    <MissionCard
                        title="Cuidado en cada detalle"
                        description="Acompañamos cada celebración con la misma dedicación y cariño con la que organizaríamos la nuestra propia."
                        icon={Flower}
                        className={fadeClass()}
                        style={fadeStyle(400)}
                    />
                    <MissionCard
                        title="Conexión con la naturaleza"
                        description="Cada rincón convive en armonía con el entorno, preservando la belleza auténtica del paisaje."
                        icon={Sprout}
                        className={fadeClass()}
                        style={fadeStyle(500)}
                    />
                </div>
            </div>
            <div className="h-px w-[70%] bg-graphite-500/10"></div>
        </section>
    );
}
