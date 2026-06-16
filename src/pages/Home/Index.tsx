import HeroSection from '@/components/Home/HeroSection';
import IntroSection from '@/components/Home/IntroSection';
import IntroSpaceSection from '@/components/Home/IntroSpaceSection';
import MissionSection from '@/components/Home/MissionSection';
import IntroHistory from '@/components/Home/IntroHistory';

export default function Index() {
    return (
        <>
            <HeroSection />
            <IntroSection />
            <IntroSpaceSection />
            <MissionSection />
            <IntroHistory />
        </>
    );
}
