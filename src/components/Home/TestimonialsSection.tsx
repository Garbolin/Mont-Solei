import TestimonialsCarousel from '@/components/Home/TestimonialsCarousel';

export default function TestimonialsSection() {
    return (
        <section className="flex flex-col w-full h-[80vh] mx-auto items-center justify-center gap-6 bg-porcelain-500 ">
            <div className="flex flex-col w-[70%] items-start justify-center gap-6">
                <h2 className="font-cormorant uppercase italic text-graphite-500 font-regular text-3xl">
                    Experiencias que hablan por sí solas
                </h2>
                <h3 className="pl-6 font-raleway text-graphite-500 font-light italic text-md max-w-2xl">
                    Cada celebración es única. Conozca las historias de quienes hicieron de este
                    lugar el escenario de sus recuerdos más especiales.
                </h3>
                <div className="p-6 w-full flex items-center justify-center">
                    <TestimonialsCarousel />
                </div>
            </div>
        </section>
    );
}
