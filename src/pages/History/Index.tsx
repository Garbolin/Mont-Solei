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
            <div className="w-full bg-ebony-500">
                <TemporalLineSection />
            </div>
        </section>
    );
}
