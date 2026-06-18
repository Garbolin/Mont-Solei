import { ChevronRight } from 'lucide-react';

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
                <button
                    className="w-fit flex items-center justify-center bg-terracotta-500 border py-2 px-4 text-porcelain-500 rounded-xl gap-6 h-fit
                    hover:bg-transparent hover:text-terracotta-500 hover:border-terracotta-500 transition-all duration-300"
                >
                    <p className="uppercase font-raleway font-semibold text-sm">
                        SOLICITAR INFORMACIÓN
                    </p>
                    <ChevronRight strokeWidth={2} className="" />
                </button>
            </div>
        </section>
    );
}
