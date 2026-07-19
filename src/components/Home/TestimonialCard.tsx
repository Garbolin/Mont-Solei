import { Quote } from 'lucide-react';
import Stars from '@/assets/stars.png';

export default function TestimonialCard() {
    return (
        <div className="flex flex-col items-start border gap-5 border-parchment-500 rounded-lg p-4 h-[250px] bg-backdrop-blur-sm bg-porcelain-500/10">
            <div className="flex gap-2 w-full justify-between items-start">
                <Quote className="text-paleoak-500" />
                <img src={Stars} alt="5 stars" className="shrink-1 scale-80" />
            </div>
            <div className="flex flex-col gap-2 mt-2">
                <p className="text-graphite-500 text-sm font-regular font-raleway">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet
                    consectetur adipiscing elit quisque faucibus.
                </p>
                <p className="text-graphite-500 text-sm font-regular font-raleway">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet
                    consectetur adipiscing elit quisque faucibus.
                </p>
            </div>
        </div>
    );
}
