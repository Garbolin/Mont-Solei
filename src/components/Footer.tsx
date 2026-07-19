import Instagram from '@/assets/Instagram.svg';
import Pinterest from '@/assets/Pinterest.svg';
import Telegram from '@/assets/Telegram.svg';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-graphite-500 w-full h-[10vh] flex items-center font-raleway text-porcelain-500">
            <div className="w-full max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between text-sm tracking-wide">
                <p className="text-center md:text-left">
                    © {year} Montaña Solei — Espacio natural para eventos
                </p>
                <div className="flex gap-4">
                    <img src={Telegram} alt="" className="w-7 h-7" />
                    <img src={Instagram} alt="" className="w-7 h-7" />
                    <img src={Pinterest} alt="" className="w-7 h-7" />
                </div>
                <ul className="flex items-center gap-6 font-regular">
                    <li>
                        <a href="/aviso-legal" className="hover:text-paleoak-500 transition-colors">
                            Aviso legal
                        </a>
                    </li>
                    <li>
                        <a href="/privacidad" className="hover:text-paleoak-500 transition-colors">
                            Privacidad
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
