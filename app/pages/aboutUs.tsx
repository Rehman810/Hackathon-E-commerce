import { Banner } from '../components/banner/page';
import StatsSection from '../components/stats/page';
import TeamSection from '../components/team/page';
import VideoSection from '../components/videoSection/page';

export default function Home() {
  return (
    <>
      <Banner bg='aboutBg.png'/>
      <StatsSection />
      <VideoSection />
      <TeamSection />
    </>
  );
}
