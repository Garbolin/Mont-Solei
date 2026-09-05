interface ValueCardProps {
    title: string;
    description: string;
    icon: string;
    className: string;
    style: React.CSSProperties;
}

export default function ValueCard({
    title,
    description,
    icon: Icon,
    className,
    style,
}: ValueCardProps) {
    return (
        <section
            className={`flex flex-col items-center justify-start gap-3 rounded-lg bg-parchment-500 px-4 py-5 shadow-md sm:gap-2 sm:p-4 sm:py-6 ${className}`}
            style={style}
        >
            <div className="flex flex-col justify-center gap-3 sm:gap-4 items-center">
                <img src={Icon} alt={title} className="w-5 h-5 sm:w-6 sm:h-6 text-graphite-500" />
                <h2 className="text-center text-sm font-regular text-graphite-500 sm:text-base">
                    {title}
                </h2>
            </div>
            <h3 className="text-center text-pretty text-sm sm:text-[16px] font-light font-raleway text-graphite-500">
                {description}
            </h3>
        </section>
    );
}
