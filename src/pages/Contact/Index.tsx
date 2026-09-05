import InfoSection from '@/components/Contact/InfoSection';
import FormSection from '@/components/Contact/FormSection';
import MapSection from '@/components/Contact/MapSection';
import { useInView } from '@/hooks/useInView';

// Index.tsx
export default function Index() {
    const { ref, isInView } = useInView<HTMLElement>();

    const fadeClass = () =>
        `transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`;

    return (
        <section
            className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-start justify-start px-4 pb-12 pt-20 font-raleway sm:px-6 sm:pb-16 sm:pt-24 md:justify-center md:px-8 md:pt-30"
            ref={ref}
        >
            <h1
                className={`mb-6 w-full text-start font-cormorant text-3xl font-semibold text-black sm:mb-8 sm:text-4xl md:mb-10 md:text-5xl ${fadeClass()}`}
            >
                Conectemos
            </h1>
            <div className="mx-auto flex w-full flex-col items-stretch gap-12 sm:gap-14 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] md:gap-16 lg:gap-24">
                <InfoSection />
                <FormSection />
            </div>
            <div className="my-8 h-px w-full bg-paleoak-500 sm:mt-10"></div>
            <MapSection />
        </section>
    );
}
