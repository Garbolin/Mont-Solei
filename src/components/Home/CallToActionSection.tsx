import Button from '@/components/Button';

export default function CallToActionSection() {
    return (
        <section className="bg-parchment-500 w-full h-[50vh] items-center justify-center">
            <div className="flex flex-col gap-8 mx-auto w-[70%] items-center justify-center h-full">
                <h2 className="font-cormorant text-graphite-500 font-semibold text-4xl">
                    Su día especial comienza aquí
                </h2>
                <p className="text-center font-raleway text-graphite-500 font-light italic text-lg text-pretty max-w-2xl">
                    Comparta con nosotros los detalles de su celebración y le acompañaremos en cada
                    paso para hacerla realidad.
                </p>
                <Button
                    text="SOLICITAR INFORMACIÓN"
                    link="/contact"
                    filled={true}
                    color="terracotta"
                    py="2"
                />
            </div>
        </section>
    );
}
