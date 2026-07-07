import SocialsSection from '@/components/Contact/SocialsSection';

export default function InfoSection() {
    return (
        <section className="flex flex-col gap-5">
            <div className="flex flex-col gap-15">
                <div className="max-w-md">
                    <p>
                        Estamos aquí para transformar su visión en una realidad inolvidable.
                        Visitenos o escribanos para comenzar a planificar su próximo hito.
                    </p>
                </div>
                <SocialsSection />
            </div>
            <div className="h-px w-full bg-paleoak-500"></div>
            <div className="max-w-md">
                <p>
                    Sin compromiso, solo una conversación para ver si encajamos. Lunes a Viernes, 9h
                    a 18h. Respondemos en 24 horas.
                </p>
            </div>
        </section>
    );
}
