import InfoSection from '@/components/Contact/InfoSection';
import FormSection from '@/components/Contact/FormSection';
import MapSection from '@/components/Contact/MapSection';

export default function Index() {
    return (
        <section className="mx-auto pt-30 w-full min-h-screen max-w-5xl font-raleway flex flex-col items-start justify-center">
            <h1 className="w-full text-start text-5xl font-cormorant text-black font-semibold mb-10">
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
