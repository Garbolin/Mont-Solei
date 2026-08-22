import TemporalLineSection from '@/components/History/TemporalLineSection';

export default function Index() {
    return (
        <section className="pt-30 mx-auto w-full min-h-screen font-raleway flex flex-col items-center justify-start">
            <h1 className="w-full text-center text-5xl font-cormorant text-black font-semibold mb-7">
                Nuestra historia
            </h1>
            <h2 className="max-w-4xl text-pretty mx-auto text-center text-md font-raleway text-black font-regular mb-10">
                Un viaje de reconexión con la tierra, cultivando un espacio donde la naturaleza y la
                comunidad se entrelazan en perfecta armonía.
            </h2>

            <div className="relative w-full bg-ebony-500 mt-15">
                <svg
                    viewBox="0 0 1200 180"
                    preserveAspectRatio="none"
                    className="absolute top-0 left-0 w-full -translate-y-full z-10 text-ebony-500"
                    style={{ height: '80px' }}
                >
                    <path d="M0,0 C600,159 600,159 1200,0 L1200,180 L0,180 Z" fill="currentColor" />
                </svg>
                <TemporalLineSection />
            </div>
        </section>
    );
}
