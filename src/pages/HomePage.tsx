import { useEffect } from "react";
import { Spotlight } from "../components/Spotlight.tsx";
import PresentationLeft from "../components/PresentationLeft.tsx";
import PresentationRight from "../components/PresentationRightMe.tsx";
import ProjectList from "../components/ProjectList.tsx";
import arrow from "../assets/arrow.svg";
import Header from "../components/Header.tsx";
import SkillsGrid from "../components/SkillsGrid.tsx";

const HomePage = () => {
  // scroll header - utilisation de useEffect pour éviter les problèmes de montage du composant
  useEffect(() => {
    const handleScroll = function () {
      const headerElement = document.querySelector("#header");
      const arrowElement = document.querySelector("#arrow");
      if (headerElement) {
        if (window.scrollY > 0) {
          headerElement.classList.add("scrolled");
          headerElement.classList.remove("top-position");
        } else {
          headerElement.classList.remove("scrolled");
          headerElement.classList.add("top-position");
        }
      }
      if (arrowElement) {
        if (window.scrollY > 0) {
          arrowElement.classList.add("hideArrow");
          arrowElement.classList.remove("showArrow");
        } else {
          arrowElement.classList.add("showArrow");
          arrowElement.classList.remove("hideArrow");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Nettoyer l'event listener quand le composant est démonté
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Le tableau vide signifie que cet effet ne s'exécute qu'une fois après le montage initial

  return (
    <>
      <Header></Header>
      <div className="overflow-hidden">
        <Spotlight className="left-[90px] top-[40px] z-50" fill="#dad5b6e2" />
      </div>
      <div className="backgroundColor m-0 box-border flex min-w-full">
        <div className="presentationContainer max-w-11/12 m-auto flex h-[450px] items-center justify-around gap-[96px] px-[40px] pb-0 pt-[105px] max-lg:h-auto max-lg:flex-col max-lg:gap-[5px] max-sm:px-0 max-sm:py-[60px]">
          <PresentationLeft />
          <PresentationRight />
        </div>
      </div>
      <div
        id="Projects"
        className="backgroundColor m-0 mt-[60px] flex w-full pt-[260px] max-lg:pt-[100px] max-md:pt-[80px] max-sm:pt-[25px]"
      >
        <img id="arrow" src={arrow} className=""></img>
        <div className="projectContainer z-10 m-auto flex h-auto w-[82%] max-w-[1300px] flex-col rounded-[16px] px-[20px] pb-[35px] pt-[15px] max-md:w-full max-md:rounded-none max-md:border-0 max-md:bg-transparent">
          <div className="m-auto mb-2 flex w-fit rounded-lg px-1 py-4 text-[30px] font-[500] leading-tight text-blue-50">
            Projets
          </div>
          {/* <div className="gridProject mt-2 grid h-[auto] w-full grid-cols-custom3 gap-4 rounded-xl max-lg:h-[340px] max-lg:grid-cols-custom2 max-md:h-[480px] max-md:grid-cols-custom1"> */}

          <div className="gridProject mt-2 grid h-[auto] w-full grid-cols-custom3 gap-4 rounded-xl max-[1200px]:grid-cols-custom2 max-md:grid-cols-custom1">
            <ProjectList />
          </div>
        </div>
      </div>
      <div
        id="Skills"
        className="backgroundColor relative z-10 m-0 box-border flex min-w-full pb-[245px] pt-[190px] max-lg:pt-[80px] max-md:pt-[70px] max-sm:pt-[60px]"
      >
        <div className="relative m-auto flex h-auto w-[65%] max-w-[1300px] flex-col max-md:w-full max-md:px-[25px]">
          <div className="m-auto mb-[20px] flex w-fit rounded-lg px-5 py-2 text-[30px] font-[500] leading-tight text-blue-50 max-md:px-0">
            Compétences
          </div>
          <SkillsGrid />
          {/* <SkillsBentoGrid /> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
