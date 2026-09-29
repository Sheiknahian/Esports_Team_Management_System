import Image from "next/image";
import Banner from "./Components/Banner";
import Roster from "./Components/Roster";
import Matches from "./Components/Matches";
import Tournaments from "./Components/Tournaments";
import Achivements from "./Components/Achivements";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] light:bg-white">

       <div className="
          fixed -top-40 left-1/2
          -translate-x-1/2
          w-160 h-160
          rounded-full
          bg-[#552d92]
          opacity-40
          blur-[180px]
        "/>
        <div className="
          fixed -bottom-40 -right-40
          w-150 h-150
          rounded-full
          bg-[#552d92]
          opacity-30
          blur-[180px]
        "/>
        <div className="
          fixed -bottom-40 left-40
          w-150 h-150
          rounded-full
          bg-[#552d92]
          opacity-30
          blur-[180px]
        "/>

        {/* Content */}
        <div className="relative z-10">
          <section id="home">
            <Banner></Banner>
          </section>
          <section id="roster" className="scroll-mt-10 md:scroll-mt-42">
            <Roster></Roster>
          </section>
          <section id="matches" className="scroll-mt-10 md:scroll-mt-42">
            <Matches></Matches>
          </section>
          <section id="tournamnets" className="scroll-mt-10 md:scroll-mt-42">
            <Tournaments></Tournaments>
          </section>
          <section id="achivements" className="scroll-mt-10 md:scroll-mt-42">
            <Achivements></Achivements>
          </section>
          <section id="contact" className="scroll-mt-10 md:scroll-mt-42">
            <Contact></Contact>
          </section>
        </div>
    </div>
  );
}
