import Hero from "./_components/hero";
import MeetTeam from "./_components/meet-team";
import OurServices from "./_components/our-services";
import OurStory from "./_components/our-story";

export default function About() {
  return (
    <>
      <Hero />
      <div className="space-y-28 pb-16">
        <OurServices />
        <MeetTeam />
        <OurStory />
      </div>
    </>
  );
}
