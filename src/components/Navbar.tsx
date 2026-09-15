import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/logo_no_text.svg?react';
import { useNavbarTheme } from '@/context/NavbarThemeContext';
import LanguageSwitcher from './LangSwitcher';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const { t } = useTranslation();
    const { theme } = useNavbarTheme();
    const [isOpen, setIsOpen] = useState(false);

    const textColor = theme === 'light' ? 'text-white' : 'text-graphite-500';
    const glowColor =
        theme === 'light'
            ? 'hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]' // fondo oscuro -> glow blanco
            : 'hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.35)]';

    const links = [
        { to: '/', label: t('navbar.home') },
        { to: '/history', label: t('navbar.history') },
        { to: '/contact', label: t('navbar.contact') },
    ];

    return (
        <nav className="relative m-2">
            <div
                className="flex items-center justify-between p-2 px-6 h-16 bg-porcelain-500/4 backdrop-blur-sm
                    border-b border-white/5
                    shadow-lg rounded-full"
            >
                <div
                    className={`${textColor} h-13 w-13 flex items-center justify-center transition-colors duration-200 shrink-0`}
                >
                    <Logo className="h-13 w-13" />
                </div>

                {/* Enlaces: ocultos en mobile, visibles desde md */}
                <ul
                    className={`${textColor} hidden md:flex flex-1 items-center justify-center space-x-10 uppercase text-xs font-bold tracking-widest transition-colors duration-200`}
                >
                    {links.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                className={`opacity-80 hover:opacity-100 hover:-translate-y-0.5 ${glowColor} transition-all duration-200 inline-block`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3">
                    <div className={`${textColor} hidden md:block transition-colors duration-300`}>
                        <LanguageSwitcher textColor={textColor} />
                    </div>

                    {/* Botón hamburguesa: solo mobile */}
                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={isOpen}
                        className={`${textColor} md:hidden relative w-8 h-8 flex items-center justify-center shrink-0`}
                    >
                        <span
                            className={`absolute block h-0.5 w-6 bg-current rounded transition-all duration-300 ${
                                isOpen ? 'rotate-45' : '-translate-y-2'
                            }`}
                        />
                        <span
                            className={`absolute block h-0.5 w-6 bg-current rounded transition-all duration-300 ${
                                isOpen ? 'opacity-0' : 'opacity-100'
                            }`}
                        />
                        <span
                            className={`absolute block h-0.5 w-6 bg-current rounded transition-all duration-300 ${
                                isOpen ? '-rotate-45' : 'translate-y-2'
                            }`}
                        />
                    </button>
                </div>
            </div>

            {/* Panel mobile */}
            <div
                className={`md:hidden overflow-hidden backdrop-blur-sm transition-all shadow-lg rounded-3xl duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="border border-white/5 px-6 py-5">
                    <ul
                        className={`${textColor} flex flex-col items-center gap-5 uppercase text-xs font-bold tracking-widest`}
                    >
                        {links.map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    onClick={() => setIsOpen(false)}
                                    className={`opacity-80 hover:opacity-100 hover:-translate-y-0.5 ${glowColor} transition-all duration-200 inline-block`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div
                        className={`${textColor} flex justify-center mt-5 pt-4 border-t border-white/10`}
                    >
                        <LanguageSwitcher textColor={textColor} variant="inline" />
                    </div>
                </div>
            </div>
        </nav>
    );
}
