import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    const phoneNumber = '34603715803';
    const message = 'Hola, quiero más información sobre vuestros servicios';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-6 right-6 z-50 group inline-block">
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="flex items-center justify-center w-14 h-14 rounded-full
                    bg-porcelain-500/10 backdrop-blur-sm border border-white/10
                    text-graphite-500 hover:text-white hover:bg-[#25D366]
                    transition-colors duration-300 shadow-lg"
            >
                <MessageCircle strokeWidth={2} className="w-6 h-6" />
            </a>

            {/* Popover */}
            <span
                role="tooltip"
                className="pointer-events-none absolute top-1/2 right-full -translate-y-1/2 mr-3
                    whitespace-nowrap rounded-lg bg-graphite-500 text-white text-xs font-medium
                    px-3 py-2 shadow-lg
                    opacity-0 scale-95 translate-x-1
                    group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0
                    transition-all duration-200 ease-out"
            >
                Contacta con nosotros a través de WhatsApp
                <span
                    className="absolute top-1/2 left-full -translate-y-1/2 w-2 h-2
                        bg-graphite-500 rotate-45 -ml-1"
                />
            </span>
        </div>
    );
}
