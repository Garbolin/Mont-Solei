import { useInView } from '@/hooks/useInView';

export default function MapSection() {
    const { ref, isInView } = useInView<HTMLElement>();
    const fadeClass = () =>
        `transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`;

    return (
        <section
            className={`h-64 w-full p-0 sm:h-80 sm:p-4 md:h-125 md:p-8 lg:p-12 ${fadeClass()}`}
            ref={ref}
        >
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
