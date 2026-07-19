interface MissionCardProps {
    title: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function MissionCard({ title, description, icon: Icon }: MissionCardProps) {
    return (
        <section className="flex flex-col items-start justify-start gap-2 bg-parchment-500 p-6 rounded-lg shadow-md">
            <div className="flex justify-start gap-4 items-center">
                <Icon strokeWidth={1} className="w-8 h-8 text-graphite-500" />
                <h2 className="text-md font-regular text-graphite-500 font-raleawy">{title}</h2>
            </div>
            <h3 className="pl-12 max-w-sm text-pretty text-[16px] font-light font-raleway text-graphite-500">
                {description}
            </h3>
        </section>
    );
}
