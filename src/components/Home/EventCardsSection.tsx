import StackedEventCard from '@/components/Home/StackedEventCard';

export default function EventCardsSection() {
    return (
        <section className="flex flex-col items-center justify-center gap-8 py-16 bg-linear-to-b from-porcelain-500 to-paleoak-500 w-full">
            <StackedEventCard />
        </section>
    );
}
