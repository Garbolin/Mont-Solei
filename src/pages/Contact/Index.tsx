import InfoSection from '@/components/Contact/InfoSection';
import FormSection from '@/components/Contact/FormSection';
import MapSection from '@/components/Contact/MapSection';
import { useInView } from '@/hooks/useInView';

export default function Index() {
    const { ref, isInView } = useInView<HTMLElement>();

    const fadeClass = () =>
        `transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`;

    return (
        <section
            className="mx-auto pt-30 w-full min-h-screen max-w-5xl font-raleway flex flex-col items-start justify-center"
            ref={ref}
        >
            <h1
                className={`w-full text-start text-5xl font-cormorant text-black font-semibold mb-10 ${fadeClass()}`}
            >
                Conectemos
            </h1>
            <div className="mx-auto flex items-center justify-between w-full flex-col gap-10 md:flex-row md:items-stretch md:gap-30">
                <InfoSection />
                <FormSection />
            </div>
            <div className="h-px w-full bg-paleoak-500 mt-5"></div>
            <MapSection />
        </section>
    );
}
