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
            className={`flex flex-col items-center justify-start gap-2 bg-parchment-500 p-4 py-6 rounded-lg shadow-md ${className}`}
            style={style}
        >
            <div className="flex flex-col justify-center gap-4 items-center">
                <img src={Icon} alt={title} className="w-6 h-6 text-graphite-500" />
                <h2 className="text-md font-regular text-graphite-500 font-raleawy">{title}</h2>
            </div>
            <h3 className="text-center text-pretty text-[16px] font-light font-raleway text-graphite-500">
                {description}
            </h3>
        </section>
    );
}
