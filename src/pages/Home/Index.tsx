import HeroSection from '@/components/Home/HeroSection';
import IntroSection from '@/components/Home/IntroSection';
import IntroSpaceSection from '@/components/Home/IntroSpaceSection';
import MissionSection from '@/components/Home/MissionSection';
import IntroHistory from '@/components/Home/IntroHistory';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import CallToActionSection from '@/components/Home/CallToActionSection';

export default function Index() {
    return (
        <>
            <HeroSection />
            <IntroSection />
            <IntroSpaceSection />
            <MissionSection />
            <IntroHistory />
            <TestimonialsSection />
            <CallToActionSection />
        </>
    );
}
