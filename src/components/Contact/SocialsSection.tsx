import { Mail, MapPin, Phone } from 'lucide-react';
import Instagram from '@/assets/Instagram.svg';
import Pinterest from '@/assets/Pinterest.svg';
import Telegram from '@/assets/Telegram.svg';

export default function SocialsSection() {
    return (
        <section className="flex flex-col gap-10">
            <div className="flex items-center justify-start gap-4">
                <Mail strokeWidth={1} />
                <div className="flex flex-col gap-1">
                    <p className="font-semibold uppercase text-xs">EMAIL</p>
                    <p className="font-light text-sm">holaquetal@gmail.com</p>
                </div>
            </div>
            <div className="flex items-center justify-start gap-4">
                <Phone strokeWidth={1} />
                <div className="flex flex-col gap-1">
                    <p className="font-semibold uppercase text-xs">TELÉFONO</p>
                    <p className="font-light text-sm">+34 603 92 38 40</p>
                </div>
            </div>
            <div className="flex items-center justify-start gap-4">
                <MapPin strokeWidth={1} />
                <div className="flex flex-col gap-1">
                    <p className="font-semibold uppercase text-xs">UBICACIÓN</p>
                    <p className="font-light text-sm">LoremIpsumNoseque, Ecuador</p>
                </div>
            </div>
            <div className="flex items-center justify-start gap-4">
                <MapPin className="opacity-0" />
                <div className="flex flex-col gap-2">
                    <p className="font-semibold uppercase text-xs">REDES SOCIALES</p>
                    <div className="flex gap-4">
                        <img src={Telegram} alt="" className="w-6 h-7" />
                        <img src={Instagram} alt="" className="w-6 h-7" />
                        <img src={Pinterest} alt="" className="w-6 h-7" />
                    </div>
                </div>
            </div>
        </section>
    );
}
