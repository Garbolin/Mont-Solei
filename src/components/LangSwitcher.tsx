import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';

type Props = {
    textColor: string;
    variant?: 'dropdown' | 'inline';
};

const languages: { code: 'es' | 'en'; label: string }[] = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
];

export default function LanguageSwitcher({ textColor, variant = 'dropdown' }: Props) {
    if (variant === 'inline') {
        return <InlineSwitcher textColor={textColor} />;
    }

    return <DropdownSwitcher textColor={textColor} />;
}

// Variante para el panel mobile: sin posicionamiento absoluto, no hay overflow que la recorte
function InlineSwitcher({ textColor }: { textColor: string }) {
    const { i18n } = useTranslation();

    const changeLanguage = (code: string) => {
        i18n.changeLanguage(code);
    };

    return (
        <div className={`${textColor} flex items-center gap-2`}>
            <Globe strokeWidth={2} className="h-5 w-5 opacity-70" />
            <div className="flex items-center gap-1 rounded-full bg-white/10 p-1">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        type="button"
                        onClick={() => changeLanguage(lang.code)}
                        className={`text-xs uppercase font-bold px-3 py-1 rounded-full transition-colors duration-200 ${
                            i18n.language === lang.code
                                ? 'bg-terracotta-500 text-porcelain-500'
                                : 'hover:bg-white/10'
                        }`}
                    >
                        {lang.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

// Variante original para desktop, con dropdown flotante
function DropdownSwitcher({ textColor }: { textColor: string }) {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const changeLanguage = (code: string) => {
        i18n.changeLanguage(code);
        setOpen(false);
    };

    useEffect(() => {
        if (!open) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setOpen(false);
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [open]);

    return (
        <div className="relative z-10" ref={containerRef}>
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className={`${textColor} flex items-center gap-1 transition-colors duration-300`}
                aria-label="Cambiar idioma"
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                <Globe strokeWidth={2} className="h-5 w-5" />
                <span className="text-xs font-bold uppercase">{i18n.language}</span>
                <ChevronDown
                    strokeWidth={2}
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                />
            </button>

            {open && (
                <ul
                    role="listbox"
                    className="absolute right-0 left-auto top-full mt-2 flex flex-col gap-1 rounded-lg bg-porcelain-500 p-2 shadow-lg text-graphite-500 min-w-[70px] z-20
                        max-[380px]:right-1/2 max-[380px]:translate-x-1/2"
                >
                    {languages.map((lang) => (
                        <li
                            key={lang.code}
                            role="option"
                            aria-selected={i18n.language === lang.code}
                        >
                            <button
                                type="button"
                                onClick={() => changeLanguage(lang.code)}
                                className={`w-full text-left text-xs uppercase font-bold px-2 py-1 rounded-md transition-colors duration-200 ${
                                    i18n.language === lang.code
                                        ? 'bg-terracotta-500 text-porcelain-500'
                                        : 'hover:bg-parchment-500'
                                }`}
                            >
                                {lang.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
