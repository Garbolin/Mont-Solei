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
    // const [api, setApi] = React.useState<CarouselApi>();
    // const [current, setCurrent] = React.useState(0);

    // React.useEffect(() => {
    //     if (!api) {
    //         return;
    //     }

    //     setCurrent(api.selectedScrollSnap() + 1);

    //     api.on('select', () => {
    //         setCurrent(api.selectedScrollSnap() + 1);
    //     });
    // }, [api]);

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
            // setApi={setApi}
        >
            <div className="mask-x-from-90%">
                <CarouselContent>
                    {images.map((image) => (
                        <CarouselItem className={cn('basis-2/10 transition-opacity')} key={image}>
                            <img
                                alt="dddepth-248"
                                className="h-80 w-full rounded-xl object-cover"
                                src={image}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </div>
            <CarouselPrevious className={arrowButtonStyles} />
            <CarouselNext className={arrowButtonStyles} />
        </Carousel>
    );
}
