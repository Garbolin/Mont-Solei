import { useLayoutEffect, useRef, useState } from 'react';

/**
 * Línea central + puntos "guiados" por las cards:
 * en vez de espaciar los puntos a mano, medimos la posición real
 * de cada card (con ResizeObserver, porque el alto varía según
 * si tiene año/párrafo largo) y ponemos el punto a la altura de
 * su centro vertical. Si cambia el contenido de una card, el punto
 * se re-calcula solo.
 */

const COLORS = {
    green: '#4A4E3A',
    greenDark: '#3D4030',
    cream: '#F4F1E8',
    ink: '#2A2C22',
};

const TIMELINE_DATA = [
    { id: 1, year: null, text: 'Empieza siendo un entorno salvaje y de tierra volcánica' },
    { id: 2, year: null, text: 'Luego prado para vacas de personas locales' },
    {
        id: 3,
        year: '2020',
        text: 'Una familia local adquiere el terreno con un sueño. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.',
    },
    {
        id: 4,
        year: '2022',
        text: 'Se levanta la primera estructura para eventos, pensada para bodas al aire libre.',
    },
    { id: 5, year: '2024', text: 'Primera boda celebrada en el espacio.' },
];

export default function TemporalLineSection() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [dotPositions, setDotPositions] = useState<number[]>([]);

    useLayoutEffect(() => {
        const measure = () => {
            if (!containerRef.current) return;

            const containerTop = containerRef.current.getBoundingClientRect().top;

            const positions = cardRefs.current
                .filter((el): el is HTMLDivElement => el !== null)
                .map((el) => {
                    const rect = el.getBoundingClientRect();
                    return rect.top - containerTop + rect.height / 2;
                });

            setDotPositions(positions);
        };

        measure();

        // Re-medir si cambia el alto de cualquier card (texto largo, resize, fuentes...)
        let ro: ResizeObserver | undefined;

        if (typeof ResizeObserver !== 'undefined') {
            ro = new ResizeObserver(measure);
            cardRefs.current.forEach((el) => {
                if (el) ro!.observe(el);
            });
        }

        return () => {
            ro?.disconnect();
            window.removeEventListener('resize', measure);
        };
    }, []);

    const lineHeight =
        dotPositions.length > 1 ? dotPositions[dotPositions.length - 1] - dotPositions[0] : 0;

    return (
        <div className="font-raleway py-20 px-6">
            <div ref={containerRef} className="relative max-w-160 mx-auto">
                {/* Línea central: arranca y termina exactamente en el 1er y último punto */}
                {dotPositions.length > 1 && (
                    <div
                        className="absolute left-[50%] w-0.5  "
                        style={{
                            top: dotPositions[0],
                            height: lineHeight,
                            background: 'rgba(255,255,255,0.25)',
                            transform: 'translateX(-50%)',
                        }}
                    />
                )}

                {/* Puntos, posicionados en el centro vertical real de cada card */}
                {dotPositions.map((top, i) => (
                    <div
                        key={i}
                        className="absolute left-[50%] w-[14px] h-[14px] rounded-full bg-white"
                        style={{
                            top,
                            boxShadow: '0 0 0 4px rgba(255,255,255,0.15)',
                            transform: 'translate(-50%, -50%)',
                            transition: 'top 0.3s ease',
                        }}
                    />
                ))}

                {/* Cards, alternando lado izq/der de la línea */}
                <div className="flex flex-col gap-14">
                    {TIMELINE_DATA.map((item, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                            <div
                                key={item.id}
                                className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}
                            >
                                <div
                                    ref={(el) => {
                                        cardRefs.current[i] = el;
                                    }}
                                    className="rounded-lg py-[18px] px-5"
                                    style={{
                                        width: 'calc(50% - 32px)',
                                        background: item.year
                                            ? COLORS.greenDark
                                            : 'rgba(244,241,232,0.95)',
                                        color: item.year ? '#fff' : COLORS.ink,
                                    }}
                                >
                                    {item.year && (
                                        <div
                                            style={{
                                                fontSize: 22,
                                                fontWeight: 700,
                                                marginBottom: 8,
                                            }}
                                        >
                                            {item.year}
                                        </div>
                                    )}
                                    <p style={{ margin: 0, lineHeight: 1.5, fontSize: 14 }}>
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
