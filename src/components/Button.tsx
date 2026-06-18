import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ButtonProps {
    text: string;
    link: string;
    filled?: boolean;
    color?: string;
    textColor?: string;
    py?: string;
}

export default function Button({
    text,
    link,
    filled,
    color = 'blue',
    textColor = 'porcelain',
    py = '2',
}: ButtonProps) {
    const className = filled
        ? `bg-${color}-500 text-${textColor}-500 hover:bg-transparent hover:text-${color}-500 border-${color}-500 border py-${py} transition-all duration-300`
        : `bg-transparent text-${color}-500 border border-${color}-500 py-${py} hover:bg-${color}-500 hover:text-${textColor}-500 transition-all duration-300`;

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
