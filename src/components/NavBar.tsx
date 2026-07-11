import Logo from '@/assets/logo_no_text.svg';
import { Globe } from 'lucide-react';
import { useNavbarTheme } from '@/context/NavbarThemeContext';

export default function Navbar() {
    const { theme } = useNavbarTheme();
    const textColor = theme === 'light' ? 'text-white' : 'text-graphite-500';

    return (
        <nav
            className="flex items-center justify-between p-2 m-2 px-6 h-16 bg-porcelain-500/4 backdrop-blur-sm
                border-b border-white/5
                shadow-lg rounded-full"
        >
            <div
                className={`${textColor} h-13 w-13 flex items-center justify-center transition-colors duration-300`}
            >
                <img src={Logo} alt="" />
            </div>
            <ul
                className={`${textColor} flex flex-1 items-center justify-center space-x-10 uppercase text-xs font-bold tracking-widest transition-colors duration-300`}
            >
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/history">History</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            <div className={`${textColor} transition-colors duration-300`}>
                <Globe strokeWidth={2} />
            </div>
        </nav>
    );
}
