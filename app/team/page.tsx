import BreadCrumb from "../components/breadCrumb/page";
import CtaBanner from "../components/Cta/CtaBanner";
import Gallery from "../components/gallery/page";
import TeamSection from "../components/team/page";

export default function Team() {
  return (
    <>
      <BreadCrumb
        h1="WHAT WE DO"
        para="Innovation tailored for you"
        route="Team"
      />
      <Gallery />
      <TeamSection />
      <CtaBanner/>
    </>
  );
}
