'use client';

// import * as React from 'react';
import { cn } from '@/lib/utils';
import {
    Carousel,
    // type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/shadcn/ui/carousel';
import { useInView } from '@/hooks/useInView';

const images = [
    'https://www.fffuel.co/images/dddepth-preview/dddepth-248.jpg',
    'https://www.fffuel.co/images/dddepth-preview/dddepth-051.jpg',
    'https://www.fffuel.co/images/dddepth-preview/dddepth-029.jpg',
    'https://www.fffuel.co/images/dddepth-preview/dddepth-038.jpg',
    'https://www.fffuel.co/images/dddepth-preview/dddepth-012.jpg',
    'https://www.fffuel.co/images/dddepth-preview/dddepth-248.jpg',
    'https://www.fffuel.co/images/dddepth-preview/dddepth-051.jpg',
    'https://www.fffuel.co/images/dddepth-preview/dddepth-029.jpg',
    'https://www.fffuel.co/images/dddepth-preview/dddepth-038.jpg',
    'https://www.fffuel.co/images/dddepth-preview/dddepth-012.jpg',
];

export default function SlideOpacity() {
    const { ref, isInView } = useInView<HTMLElement>();

    // helper para no repetir clases
    const fadeClass = () =>
        `transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`;

    const arrowButtonStyles = cn(
        'hover:bg-paleoak-500 border-paleoak-500 hover:text-porcelain-500 bg-porcelain-500 text-paleoak-500 duration-300 transition-all',
    );

    return (
        <Carousel
            className="mx-auto w-[calc(100%-2rem)] max-w-7xl sm:w-[calc(100%-1rem)]"
            opts={{
                loop: true,
                align: 'center',
                containScroll: false,
                skipSnaps: true,
            }}
        >
            <section className={`mask-x-from-90% ${fadeClass()}`} ref={ref}>
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem
                            className={cn(
                                'basis-[80%] transition-opacity sm:basis-1/2 md:basis-1/3 lg:basis-1/5',
                            )}
                            key={index}
                        >
                            <img
                                alt="dddepth-248"
                                className="h-62 w-full rounded-xl object-cover sm:h-64 md:h-72 lg:h-80"
                                src={image}
                                loading="lazy"
                                decoding="async"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </section>
            <div className="hidden items-center justify-center gap-3 pt-5 lg:flex">
                <CarouselPrevious className={cn(arrowButtonStyles, 'static translate-y-0')} />
                <CarouselNext className={cn(arrowButtonStyles, 'static translate-y-0')} />
            </div>
        </Carousel>
    );
}
