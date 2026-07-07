import { useRef, useMemo } from 'react';
import { useScroll, useSpring } from 'framer-motion';
import EventItemCard from './EventItemCard';

interface Card {
    id: number;
    title: string;
    description: string;
    subtitle: string;
}

const cards: Card[] = [
    {
        id: 1,
        title: 'Celebraciones familiares',
        subtitle: 'Momentos que la familia recuerda siempre',
        description:
            'Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    },
    {
        id: 2,
        title: 'Celebraciones familiares',
        subtitle: 'Momentos que la familia recuerda siempre',
        description:
            'Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    },
    {
        id: 3,
        title: 'Celebraciones familiares',
        subtitle: 'Momentos que la familia recuerda siempre',
        description:
            'Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    },
];

export default function StackedEventCard() {
    const containerRef = useRef<HTMLDivElement>(null);
    const memoizedCards = useMemo(() => cards, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 65,
        damping: 24,
        restDelta: 0.001,
    });

    return (
        <section ref={containerRef} className="relative h-[520vh] bg-transparent">
            <div
                className="
                    sticky
                    top-0
                    flex
                    h-screen
                    w-full
                    items-center
                    justify-center
                "
                style={{ perspective: '1400px' }}
            >
                <div className="relative h-[400px] w-[900px] transform-gpu [transform-style:preserve-3d]">
                    {memoizedCards.map((card, index) => (
                        <EventItemCard
                            key={card.id}
                            card={card}
                            index={index}
                            total={memoizedCards.length}
                            progress={smoothProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
