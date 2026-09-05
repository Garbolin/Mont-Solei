import { useLayoutEffect, useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';

/**
 * Línea central + puntos "guiados" por las filas:
 * cada fila mide su propia altura real (ResizeObserver, porque varía
 * según el contenido) y el punto se coloca en su centro vertical.
 *
 * Cada entrada es modular: `textSide` decide en qué lado va el texto;
 * la imagen (o su placeholder mientras no exista) va siempre en el
 * lado contrario, y ambas columnas quedan igual de altas gracias al
 * grid (align-items: stretch por defecto).
 *
 * El fade-in se aplica a los bloques de contenido de cada fila, NUNCA
 * al div que se mide para los puntos: un transform (translate-y) no
 * dispara el ResizeObserver, así que si el fade viviera ahí el punto
 * quedaría calculado con el offset del estado oculto.
 */

interface TimelineImage {
    src?: string; // vacío = muestra placeholder
    alt: string;
}

interface TimelineItem {
    id: number;
    year?: string;
    text: string;
    textSide: 'left' | 'right';
    image: TimelineImage;
}

const TIMELINE_DATA: TimelineItem[] = [
    {
        id: 1,
        text: 'Empieza siendo un entorno salvaje y de tierra volcánica',
        textSide: 'left',
        image: { alt: 'Terreno volcánico original' },
    },
    {
        id: 2,
        text: 'Luego prado para vacas de personas locales',
        textSide: 'right',
        image: { alt: 'El prado usado para el ganado' },
    },
    {
        id: 3,
        year: '2020',
        text: 'Una familia local adquiere el terreno con un sueño. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.',
        textSide: 'left',
        image: { alt: 'La familia adquiriendo el terreno' },
    },
    {
        id: 4,
        year: '2022',
        text: 'Se levanta la primera estructura para eventos, pensada para bodas al aire libre.',
        textSide: 'right',
        image: { alt: 'Primera estructura para eventos' },
    },
    {
        id: 5,
        year: '2024',
        text: 'Primera boda celebrada en el espacio.',
        textSide: 'left',
        image: { alt: 'Primera boda celebrada' },
    },
];

function ImageSlot({ image }: { image: TimelineImage }) {
    if (image.src) {
        return (
            <div className="relative h-full w-full min-h-[140px] sm:min-h-[160px] overflow-hidden rounded-sm ...">
                <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
        );
    }

    return (
        <div className="relative h-full w-full min-h-[160px] overflow-hidden rounded-sm border border-porcelain-500/15 bg-porcelain-500/[0.04]">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-porcelain-500/25">
                <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                >
                    <rect x="3" y="5" width="18" height="14" rx="1.5" />
                    <circle cx="8.5" cy="10" r="1.5" />
                    <path d="M21 15l-5-4-4.5 4L9 12l-6 5" />
                </svg>
                <span className="font-raleway text-[10px] uppercase tracking-[0.25em]">
                    {image.alt}
                </span>
            </div>
        </div>
    );
}

function TextBlock({ year, text }: { year?: string; text: string }) {
    if (year) {
        return (
            <div className="flex h-full flex-col justify-center py-2">
                <span className="font-cormorant text-3xl sm:text-4xl font-light text-porcelain-500">
                    {year}
                </span>
                <span className="mt-3 mb-4 block h-px w-10 bg-porcelain-500/30" />
                <p className="font-raleway text-[15px] font-light leading-relaxed text-porcelain-500/80">
                    {text}
                </p>
            </div>
        );
    }

    return (
        <div className="flex h-full flex-col justify-center py-2">
            <p className="font-raleway text-[15px] font-light italic leading-relaxed text-porcelain-500/50">
                {text}
            </p>
        </div>
    );
}

function TimelineRow({
    item,
    setRowEl,
}: {
    item: TimelineItem;
    setRowEl: (el: HTMLDivElement | null) => void;
}) {
    // Cada fila entra en vista de forma independiente (no todas a la vez)
    const { ref: inViewRef, isInView } = useInView<HTMLDivElement>();

    const fadeClass = () =>
        `transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`;
    const fadeStyle = (delayMs: number) => ({
        transitionDelay: isInView ? `${delayMs}ms` : '0ms',
    });

    const textEl = <TextBlock year={item.year} text={item.text} />;
    const imageEl = <ImageSlot image={item.image} />;
    const [first, second] = item.textSide === 'left' ? [textEl, imageEl] : [imageEl, textEl];

    return (
        <div
            // Este div se mide para los puntos y NUNCA lleva transform propio
            ref={(el) => {
                setRowEl(el);
                inViewRef.current = el;
            }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16"
        >
            <div className={`h-full ${fadeClass()}`} style={fadeStyle(0)}>
                {first}
            </div>
            <div className={`h-full ${fadeClass()}`} style={fadeStyle(150)}>
                {second}
            </div>
        </div>
    );
}

export default function TemporalLineSection({ items = TIMELINE_DATA }: { items?: TimelineItem[] }) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [dotPositions, setDotPositions] = useState<number[]>([]);

    useLayoutEffect(() => {
        const measure = () => {
            if (!containerRef.current) return;
            const containerTop = containerRef.current.getBoundingClientRect().top;

            const positions = rowRefs.current
                .filter((el): el is HTMLDivElement => el !== null)
                .map((el) => {
                    const rect = el.getBoundingClientRect();
                    return rect.top - containerTop + rect.height / 2;
                });

            setDotPositions(positions);
        };

        measure();

        let ro: ResizeObserver | undefined;
        if (typeof ResizeObserver !== 'undefined') {
            ro = new ResizeObserver(measure);
            rowRefs.current.forEach((el) => el && ro!.observe(el));
        }

        window.addEventListener('resize', measure);
        return () => {
            ro?.disconnect();
            window.removeEventListener('resize', measure);
        };
    }, [items]);

    const lineHeight =
        dotPositions.length > 1 ? dotPositions[dotPositions.length - 1] - dotPositions[0] : 0;

    return (
        <div className="font-raleway py-12 px-4 sm:py-16 sm:px-6 md:py-20">
            <div ref={containerRef} className="relative mx-auto max-w-4xl">
                {dotPositions.length > 1 && (
                    <div
                        className="absolute left-1/2 hidden w-px -translate-x-1/2 md:block"
                        style={{
                            top: dotPositions[0],
                            height: lineHeight,
                            background: 'rgba(244,241,232,0.2)',
                        }}
                    />
                )}

                {dotPositions.map((top, i) => (
                    <div
                        key={i}
                        className="absolute left-1/2 hidden h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-porcelain-500 md:block"
                        style={{
                            top,
                            boxShadow: '0 0 0 4px rgba(244,241,232,0.15)',
                            transition: 'top 0.3s ease',
                        }}
                    />
                ))}

                <div className="flex flex-col gap-16 md:gap-20">
                    {items.map((item, i) => (
                        <TimelineRow
                            key={item.id}
                            item={item}
                            setRowEl={(el) => {
                                rowRefs.current[i] = el;
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
