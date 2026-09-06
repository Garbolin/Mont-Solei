import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher({ textColor }: { textColor: string }) {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const languages: { code: 'es' | 'en'; label: string }[] = [
        { code: 'es', label: 'ES' },
        { code: 'en', label: 'EN' },
    ];

    const changeLanguage = (code: string) => {
        i18n.changeLanguage(code);
        setOpen(false);
    };

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className={`${textColor} flex items-center gap-1 transition-colors duration-300`}
                aria-label="Cambiar idioma"
            >
                <Globe strokeWidth={2} className="h-5 w-5" />
                <span className="text-xs font-bold uppercase">{i18n.language}</span>
            </button>

            {open && (
                <ul className="absolute right-0 top-full mt-2 flex flex-col gap-1 rounded-lg bg-porcelain-500 p-2 shadow-lg text-graphite-500 min-w-[70px] z-20">
                    {languages.map((lang) => (
                        <li key={lang.code}>
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
