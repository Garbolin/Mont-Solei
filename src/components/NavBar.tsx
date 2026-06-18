import Logo from '@/assets/logo_no_text.svg';
import { Globe } from 'lucide-react';

export default function Navbar() {
    return (
        <nav
            className="flex items-center justify-between p-2 px-6 h-16 bg-porcelain-500/4 backdrop-blur-sm
                border-b border-white/5
                shadow-lg"
        >
            <div className="text-graphite-500 h-13 w-13 flex items-center justify-center">
                <img src={Logo} alt="" />
            </div>
            <ul className="text-graphite-500 flex flex-1 items-center justify-center space-x-10 uppercase text-xs font-bold tracking-widest">
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
            <div className="text-graphite-500">
                <Globe strokeWidth={2} />
            </div>
        </nav>
    );
}
