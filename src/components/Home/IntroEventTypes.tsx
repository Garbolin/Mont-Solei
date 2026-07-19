interface IntroEventTypesProps {
    title: string;
    description: string;
    icon: string;
}

export default function IntroEventTypes({ title, description, icon }: IntroEventTypesProps) {
    return (
        <section className="flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col items-center justify-center gap-4">
                <img src={icon} alt="" className="w-5 h-5" />
                <h2 className="text-xl font-regular text-graphite-500 font-cormorant uppercase">
                    {title}
                </h2>
            </div>
            <h3 className="text-center max-w-xs text-balanced text-[16px] font-light font-raleway text-graphite-500">
                {description}
            </h3>
        </section>
    );
}
