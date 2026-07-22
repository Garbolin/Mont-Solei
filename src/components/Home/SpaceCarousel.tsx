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
            className="mx-2 w-full max-w-7xl"
            opts={{
                loop: true,
                align: 'center',
                containScroll: false,
                skipSnaps: true,
            }}
        >
            <section className={`mask-x-from-90% ${fadeClass()}`} ref={ref}>
                <CarouselContent>
                    {images.map((image) => (
                        <CarouselItem className={cn(`basis-2/10 transition-opacity`)} key={image}>
                            <img
                                alt="dddepth-248"
                                className="h-80 w-full rounded-xl object-cover"
                                src={image}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </section>
            <CarouselPrevious className={arrowButtonStyles} />
            <CarouselNext className={arrowButtonStyles} />
        </Carousel>
    );
}
