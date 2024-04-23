// radix css
import "@radix-ui/themes/styles.css";
import { Badge } from "@radix-ui/themes";
import "./style/App.scss"; // custom css after radix
// components
import Header from "./components/Header.tsx";
import SkillsList from "./components/SkillsList.tsx";
import ProjectList from "./components/ProjectList.tsx";
import Footer from "./components/Footer.tsx";
// icons
import composant from "./assets/composant.svg";
import grid from "./assets/grid.svg";
import underline from "./assets/underline.svg";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.svg";
import mail from "./assets/mail.svg";
// icons around big logo
import react from "./assets/logo-react.svg";
import tailwind from "./assets/logo-tailwindcss.svg";
import express from "./assets/logo-express.svg";
//

function App() {
  // scroll header
  window.addEventListener("scroll", function () {
    const headerElement = document.querySelector("#header");
    if (headerElement) {
      if (window.scrollY > 0) {
        headerElement.classList.add("scrolled");
        headerElement.classList.remove("top-position");
      } else {
        headerElement.classList.remove("scrolled");
        headerElement.classList.add("top-position");
      }
    }
  });

  return (
    <>
      <Header />
      {/* Presentation */}
      <div className="backgroundColor m-0 box-border flex min-w-full">
        <div className="presentationContainer max-w-11/12 m-auto flex items-center justify-around">
          <div className="presentationContainerLeft relative my-auto flex flex-col rounded-lg text-start font-bold ">
            <img
              className="gridIcon z-1 absolute left-[0px] top-[48px]"
              src={grid}
              height={30}
              width={30}
              alt="grille"
            />
            <img
              className="presentationUnderline absolute"
              src={underline}
              height={30}
              width={150}
              alt="underline"
            />
            <div
              id="name"
              className="presentationText gradientText z-10 text-5xl leading-tight"
            >
              Samuel Prigent
            </div>
            <div
              id="developpeur"
              className="presentationText z-10 text-7xl leading-tight text-white"
            >
              Developpeur
            </div>
            <div
              id="fullstack"
              className="presentationText voidTextWithBordure z-10 font-mono text-7xl leading-none"
            >
              Fullstack
            </div>
            <div className="linkPadding mt-[22px] flex flex-wrap justify-center gap-2 gap-y-3 text-[14px]">
              <a
                className="greenButton flex h-[38px] items-center justify-center gap-2 rounded-full font-semibold"
                target="_blank"
                href="https://www.linkedin.com/in/samuel-prigent/"
              >
                <img src={linkedin} height={17} width={17} alt="Code" />
                LinkedIn
              </a>
              <a
                className="grayButton flex h-[38px] items-center justify-center gap-2 rounded-full font-medium"
                target="_blank"
                href="https://github.com/SamuelPrigent?tab=repositories"
              >
                <img
                  className="whiteSvg"
                  src={github}
                  height={18}
                  width={18}
                  alt="Code"
                />
                Github
              </a>
              <a
                className="grayButton flex h-[38px] items-center justify-center gap-2 rounded-full font-medium"
                href="mailto:samuel.prigent@yahoo.fr"
              >
                <img
                  className="whiteSvg"
                  src={mail}
                  height={18}
                  width={18}
                  alt="Code"
                />
                samuel.prigent@yahoo.fr
              </a>
            </div>
          </div>
          <div className="composantContainer relative top-[34px] m-auto flex aspect-square items-center justify-center text-center">
            <div className="gradientBorder absolute left-0 right-0 h-full w-full rounded-full"></div>
            <div className="radiantBackground z-10"> </div>
            <div className="textureBackground z-20"></div>
            {/* react icon */}
            <div className="badgeIconColor reactIcon absolute  flex items-center justify-center rounded-full">
              <img
                src={react}
                className="greenSvg"
                height={25}
                width={25}
                alt="logo react"
              />
            </div>
            {/* express icon */}
            <div className="badgeIconColor expressIcon absolute  flex items-center justify-center rounded-full">
              <img
                src={express}
                className="greenSvg"
                height={25}
                width={25}
                alt="logo react"
              />
            </div>
            {/* tailwind */}
            <div className="badgeIconColor tailwindIcon absolute flex items-center justify-center rounded-full">
              <img
                src={tailwind}
                className="greenSvg"
                height={25}
                width={25}
                alt="logo react"
              />
            </div>
            <img
              src={composant}
              alt="composant"
              className="composantIcon z-30 aspect-square select-none"
            />
          </div>
        </div>
      </div>
      {/* Projets */}
      <div id="Projects" className="projectContainerFull backgroundColor flex">
        <div className="projectContainer flex h-auto flex-col gap-6">
          <Badge className="badgeSectionColor m-auto flex gap-2 rounded-lg px-4 py-2 text-lg font-semibold leading-tight ">
            <div>Mes projets</div>
            <div>🚀</div>
          </Badge>
          <div className="gridProject mt-2 grid w-full gap-4 rounded-xl">
            <ProjectList />
          </div>
        </div>
      </div>
      {/* Skills */}
      <div
        id="Skills"
        className="backgroundColor m-0 box-border flex min-w-full pb-[100px] pt-[50px]"
      >
        <div className="relative m-auto flex h-auto w-10/12 flex-col gap-5">
          <Badge className="badgeSectionColor start m-auto flex gap-2 rounded-lg px-4 py-2 text-lg font-semibold leading-tight ">
            <div>Compétences</div>
          </Badge>
          <SkillsList />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
