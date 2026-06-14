export default function HeroSection() {
    return (
        <section className="relative h-screen bg-[url('/images/hero_image.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 justify-center text-center">
                <h1 className="text-4xl font-bold text-white mb-4">hola </h1>
            </div>
        </section>
    );
}
