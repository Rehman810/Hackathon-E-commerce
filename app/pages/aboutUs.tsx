import { Banner } from '../components/banner/page';
import { ClientsSection } from '../components/clients/page';
import StatsSection from '../components/stats/page';
import TeamSection from '../components/team/page';
import VideoSection from '../components/videoSection/page';
import { WorkWithUs } from '../components/workWithUs/page';

export default function About() {
  return (
    <>
      <Banner bg='aboutBg.png'/>
      <StatsSection />
      <VideoSection />
      <TeamSection showThree={true}/>
      <ClientsSection
        heading="Big Companies Are Here"
        para="Problems trying to resolve the conflict between <br /> the two major
      realms of Classical physics. Newtonian physics."
      />
      <WorkWithUs />
    </>
  );
}
