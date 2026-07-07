import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type ColorKey = 'terracotta' | 'olive' | 'paleoak' | 'graphite' | 'porcelain';

interface ButtonProps {
    text: string;
    link: string;
    filled?: boolean;
    color?: ColorKey;
    textColor?: string;
    py?: string;
}

export default function Button({
    text,
    link,
    filled,
    color = 'terracotta',
    textColor = 'porcelain',
    py = '2',
}: ButtonProps) {
    
        const colorClasses: Record<ColorKey, { filled: string; outline: string }> = {            
            terracotta: {
                filled: 'bg-terracotta-500 text-porcelain-500 hover:bg-transparent hover:text-terracotta-500 border-terracotta-500',
                outline: 'bg-transparent text-terracotta-500 border border-terracotta-500 hover:bg-terracotta-500 hover:text-porcelain-500',
            },
            olive: {
                filled: 'bg-olive-500 text-porcelain-500 hover:bg-transparent hover:text-olive-500 border-olive-500',
                outline: 'bg-transparent text-olive-500 border border-olive-500 hover:bg-olive-500 hover:text-porcelain-500',
            },
            paleoak: {
                filled: 'bg-paleoak-500 text-porcelain-500 hover:bg-transparent hover:text-paleoak-500 border-paleoak-500',
                outline: 'bg-transparent text-paleoak-500 border border-paleoak-500 hover:bg-paleoak-500 hover:text-porcelain-500',
            },
            graphite: {
                filled: 'bg-graphite-500 text-porcelain-500 hover:bg-transparent hover:text-graphite-500 border-graphite-500',
                outline: 'bg-transparent text-graphite-500 border border-graphite-500 hover:bg-graphite-500 hover:text-porcelain-500',
            },
            porcelain: {
                filled: 'bg-porcelain-500 text-transparent hover:bg-transparent hover:text-porcelain-500 border-porcelain-500',
                outline: 'bg-transparent text-porcelain-500 border border-porcelain-500 hover:bg-porcelain-500 hover:text-graphite-500',
            },
        };

        const variant = filled
            ? colorClasses[color]?.filled ?? colorClasses.terracotta.filled
            : colorClasses[color]?.outline ?? colorClasses.terracotta.outline;
        const paddingY = py ? `py-${py}` : 'py-2';

        const className = `${variant} border ${paddingY} transition-all duration-300`;

    return (
        <Link to={link}>
            <button
                className={`${className} group w-fit flex items-center justify-between rounded-xl gap-6 h-fit px-4 hover:shadow-md`}
            >
                <p className="uppercase font-raleway font-semibold text-sm">{text}</p>
                <ChevronRight
                    strokeWidth={2}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                />
            </button>
        </Link>
    );
}
