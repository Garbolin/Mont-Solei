import Instagram from '@/assets/Instagram.svg?react';
import Pinterest from '@/assets/Pinterest.svg?react';
import Telegram from '@/assets/Telegram.svg?react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    const year = new Date().getFullYear();
    return (
        <footer className="bg-graphite-500 w-full font-raleway text-porcelain-500">
            <div className="w-full max-w-6xl mx-auto px-5 py-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-xs sm:text-sm tracking-wide">
                <p className="order-3 md:order-1 text-center md:text-left">
                    © {year} {t('footer.title')}
                </p>

                <div className="order-1 md:order-2 flex gap-4">
                    <Telegram className="w-6 h-6 sm:w-7 sm:h-7 text-graphite-500 hover:text-terracotta-500 transition-colors duration-200" />
                    <Instagram className="w-6 h-6 sm:w-7 sm:h-7 text-graphite-500 hover:text-terracotta-500 transition-colors duration-200" />
                    <Pinterest className="w-6 h-6 sm:w-7 sm:h-7 text-graphite-500 hover:text-terracotta-500 transition-colors duration-200" />
                </div>

                <ul className="order-2 md:order-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 font-regular">
                    <li>
                        <a href="/aviso-legal" className="hover:text-paleoak-500 transition-colors">
                            {t('footer.legal_notice')}
                        </a>
                    </li>
                    <li>
                        <a href="/privacidad" className="hover:text-paleoak-500 transition-colors">
                            {t('footer.privacy')}
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
