import { useMemo } from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import Button from '@/components/Button';

interface Card {
    id: number;
    title: string;
    subtitle: string;
    description: string;
}

export default function EventItemCard({
    card,
    index,
    total,
    progress,
}: {
    card: Card;
    index: number;
    total: number;
    progress: MotionValue<number>;
}) {
    // Calculamos los bloques de activación por tarjeta
    const cardStart = index / total;
    const cardEnd = ((index + 1) / total) * 1.5;
    const cardRotateEnd = cardStart + (cardEnd - cardStart) * 0.8;

    // Generamos dinámicamente los pasos de las tarjetas anteriores
    // Ejemplo para index 2: necesitará saber cuándo cambia el scroll en la tarjeta 0 y la tarjeta 1
    const steps = useMemo(() => {
        const temp = [];
        for (let i = 0; i <= index; i++) {
            temp.push(i / total);
        }
        // Añadimos el punto final de esta tarjeta
        temp.push(cardEnd);
        return temp;
    }, [index, total, cardEnd]);

    /**
     * EFECTO PERSIGUIENDO LA POSICIÓN (Y)
     * Las tarjetas de abajo van subiendo un escalón (18px) cada vez que una tarjeta superior se va.
     * Cuando por fin llega su propio turno (cardStart), se dispara hacia arriba (-900).
     */
    const yValues = useMemo(() => {
        const temp = [];
        // Mientras las cartas anteriores se eliminan, esta carta va subiendo puestos en el montón
        for (let i = 0; i <= index; i++) {
            temp.push((index - i) * 18);
        }
        // Punto de salida final
        temp.push(-900);
        return temp;
    }, [index]);

    const y = useTransform(progress, [...steps, 1], [...yValues, -900]);

    /**
     * EFECTO ESCALA CONTINUA (Tu petición clave)
     * Cada tarjeta empieza pequeña según su profundidad en el montón (1 - index * 0.04).
     * Cada vez que se hace scroll y se va una tarjeta superior, las de abajo crecen un 4%.
     * Al llegar a su propio turno (cardStart), alcanza el tamaño completo (1) e introduce un leve overshoot (1.01).
     */
    const scaleValues = useMemo(() => {
        const temp = [];
        const baseScale = 1 - index * 0.04;

        for (let i = 0; i <= index; i++) {
            // Va creciendo un 0.04 de escala por cada tarjeta superior eliminada
            temp.push(baseScale + i * 0.04);
        }
        // Añadimos un leve overshoot en mitad de su animación y vuelve a 1 al salir
        temp[temp.length - 1] = 1.01;
        temp.push(1);
        return temp;
    }, [index]);

    const scale = useTransform(progress, [...steps, 1], [...scaleValues, 1]);

    // Rotación suave con profundidad en el eje X (Solo actúa en su rango de salida)
    const rotateX = useTransform(progress, [0, cardStart, cardRotateEnd, 1], [0, 0, 80, 80]);

    // Opacidad suavizada al final
    const opacity = useTransform(progress, [cardStart, cardEnd * 0.92, cardEnd, 1], [1, 1, 0, 0]);

    // Sombras dinámicas según la posición
    const boxShadow = `0 25px 60px rgba(15, 23, 42, ${0.22 - index * 0.04})`;

    return (
        <motion.div
            style={{
                y,
                rotateX,
                scale,
                opacity,
                zIndex: total - index,
                boxShadow,
            }}
            className="absolute inset-0 h-140 w-[88vw] max-w-225
            origin-top transform-gpu rounded-xl border border-white/10 bg-porcelain-500 backface-hidden
            sm:h-110 md:h-100"
        >
            <div className="flex h-full w-full flex-col justify-between gap-4 p-3 sm:flex-row sm:gap-0 sm:p-4">
                <div className="flex max-w-full flex-col items-start justify-center gap-4 p-3 sm:max-w-[55%] sm:flex-1 sm:gap-7 sm:p-6">
                    <div className="flex flex-col justify-start items-start gap-1">
                        <h2 className="text-xs sm:text-sm font-bold font-raleway uppercase tracking-widest text-graphite-500">
                            {card.title}
                        </h2>
                        <h3 className="text-lg sm:text-2xl italic font-medium font-cormorant text-graphite-500 uppercase">
                            {card.subtitle}
                        </h3>
                    </div>
                    <p className="text-xs sm:text-sm font-raleway text-graphite-500 line-clamp-4 sm:line-clamp-none">
                        {card.description}
                    </p>
                    <div className="flex w-full flex-wrap items-start justify-start gap-2 sm:w-auto sm:justify-center sm:gap-4">
                        <Button
                            text="SOLICITAR INFORMACIÓN"
                            link="/contact"
                            filled={true}
                            color="terracotta"
                            py="1"
                        />
                        <Button
                            text="VER MÁS"
                            link="/contact"
                            filled={false}
                            color="terracotta"
                            py="1"
                        />
                    </div>
                </div>
                <div className="min-h-24 w-full flex-1 rounded-lg bg-graphite-500 sm:h-full sm:w-[45%] sm:flex-none"></div>
            </div>
        </motion.div>
    );
}
