export default function MapSection() {
    return (
        <section className="w-full h-96 md:h-[500px] p-20">
            <div className="w-full h-full overflow-hidden rounded-xl shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.87453459458!2d-73.9857049845945!3d40.7484405793266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30e746d%3A0x6a6e6e6e6e6e6e6e!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1619999999999!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    title="Map"
                />
            </div>
        </section>
    );
}
