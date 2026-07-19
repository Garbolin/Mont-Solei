import Logo from '@/assets/logo_no_text.svg';
import { Globe } from 'lucide-react';
export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-2 px-6 h-16 border-b-2 backdrop-blur-sm bg-white/10 border-paleoak-500/30">
            <div className="text-graphite-500 h-13 w-13 flex items-center justify-center">
                <img src={Logo} alt="" />
            </div>
            <ul className="flex flex-1 items-center justify-center space-x-10 text-graphite-500 uppercase text-xs font-bold tracking-widest">
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
