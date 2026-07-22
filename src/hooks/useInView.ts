import { useEffect, useRef, useState } from 'react';

export function useInView<T extends HTMLElement = HTMLDivElement>(
    options?: IntersectionObserverInit,
) {
    const ref = useRef<T>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log('intersecting:', entry.isIntersecting, entry.intersectionRatio);
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, ...options },
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return { ref, isInView };
}
