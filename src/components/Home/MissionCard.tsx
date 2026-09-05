interface MissionCardProps {
    title: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    className: string;
    style?: React.CSSProperties;
}

export default function MissionCard({
    title,
    description,
    icon: Icon,
    className,
    style,
}: MissionCardProps) {
    return (
        <section
            className={`flex flex-col items-start justify-start gap-2 bg-parchment-500 p-5 sm:p-6 rounded-lg shadow-md ${className}`}
            style={style}
        >
            <div className="flex justify-start gap-3 sm:gap-4 items-center">
                <Icon strokeWidth={1} className="w-7 h-7 sm:w-8 sm:h-8 text-graphite-500" />
                <h2 className="text-md font-regular text-graphite-500 font-raleawy">{title}</h2>
            </div>
            <h3 className="pl-10 sm:pl-12 max-w-sm text-pretty text-sm sm:text-[16px] font-light font-raleway text-graphite-500">
                {description}
            </h3>
        </section>
    );
}
