import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/shadcn/ui/carousel';
import TestimonialCard from './TestimonialCard';
import { cn } from '@/lib/utils';

export default function TestimonialsCarousel() {
    const arrowButtonStyles = cn(
        'hover:bg-paleoak-500 border-paleoak-500 hover:text-porcelain-500 bg-porcelain-500 text-paleoak-500 duration-300 transition-all',
    );

    return (
        <Carousel
            opts={{
                align: 'start',
                loop: true,
            }}
            className="w-full max-w-[12rem] sm:max-w-xs md:max-w-none"
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <TestimonialCard />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className={arrowButtonStyles} />
            <CarouselNext className={arrowButtonStyles} />
        </Carousel>
    );
}
