import Logo from '@/assets/logo_no_text.svg?react';
import { Globe } from 'lucide-react';
import { useNavbarTheme } from '@/context/NavbarThemeContext';
// import SunLink from '@/components/SunLink';

export default function Navbar() {
    const { theme } = useNavbarTheme();
    const textColor = theme === 'light' ? 'text-white' : 'text-graphite-500';
    const glowColor =
        theme === 'light'
            ? 'hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]' // fondo oscuro -> glow blanco
            : 'hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.35)]';

    return (
        <nav
            className="flex items-center justify-between p-2 m-2 px-6 h-16 bg-porcelain-500/4 backdrop-blur-sm
                border-b border-white/5
                shadow-lg rounded-full"
        >
            <div
                className={`${textColor} h-13 w-13 flex items-center justify-center transition-colors duration-300`}
            >
                <Logo className="h-13 w-13" />
            </div>
            <ul
                className={`${textColor} flex flex-1 items-center justify-center space-x-10 uppercase text-xs font-bold tracking-widest transition-colors duration-300`}
            >
                <li>
                    <a
                        href="/"
                        className={`opacity-80 hover:opacity-100 hover:-translate-y-0.5 ${glowColor} transition-all duration-300 inline-block`}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="/"
                        className={`transition-all duration-300 hover:text-porcelain-300 ${glowColor}`}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a href="/history" className="group relative inline-block py-1">
                        History
                        <span className="absolute left-1/2 -bottom-0.5 h-[1.5px] w-0 bg-current transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
                    </a>
                </li>
                <li>
                    <a href="/contact" className="group relative inline-block py-1">
                        Contact
                        <span className="absolute left-1/2 -bottom-0.5 h-[1.5px] w-0 bg-current transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
                    </a>
                </li>
                {/* <li>
                    <SunLink href="/">Home</SunLink>
                </li>
                <li>
                    <SunLink href="/history">History</SunLink>
                </li>
                <li>
                    <SunLink href="/contact">Contact</SunLink>
                </li> */}
            </ul>
            <div className={`${textColor} transition-colors duration-300`}>
                <Globe strokeWidth={2} />
            </div>
        </nav>
    );
}
