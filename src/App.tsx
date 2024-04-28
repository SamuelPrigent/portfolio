import "./style/App.scss"; // custom css after radix or shadcn imports
// components
import Header from "./components/Header.tsx";
import ProjectList from "./components/ProjectList.tsx";
import Footer from "./components/Footer.tsx";
import SkillsGrid from "./components/SkillsGrid.tsx";
import { Spotlight } from "./components/Spotlight.tsx";
// icons
import composant from "./assets/composant.svg";
import underline from "./assets/underline.svg";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.svg";
import mail from "./assets/mail.svg";
// icons around composant svg
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
      <div className="overflow-hidden">
        <Spotlight className="left-[0px] top-[62px] z-50" fill="#d7bf7fe4" />
      </div>
      <div className="backgroundColor m-0 box-border flex min-w-full">
        <div className="presentationContainer max-w-11/12 m-auto flex h-[450px] items-center justify-around gap-[96px] px-[40px] pb-0 pt-[80px] max-lg:h-auto max-lg:flex-col max-lg:gap-[15px] max-sm:px-0 max-sm:py-[30px]">
          <div className="presentationContainerLeft relative my-auto flex flex-col rounded-lg pt-[70px] text-start font-bold max-lg:pt-[60px] ">
            <img
              className="presentationUnderline absolute left-[190px] top-[131px] opacity-65 max-lg:left-[300px] max-lg:top-[122px] max-md:top-[117px] max-sm:left-[54%] max-sm:top-[107px] max-sm:h-[12px] lg:w-[175px]"
              src={underline}
              height={30}
              width={150}
              alt="img underline"
            />
            <div
              id="name"
              className="presentationText gradientText z-10 mb-[5px] text-5xl leading-tight max-lg:text-center max-md:text-[45px] max-sm:text-[35px]"
            >
              Samuel Prigent
            </div>
            <div
              id="developpeur"
              className="presentationText z-10 font-poppins text-[65px] font-semibold leading-tight text-white max-lg:text-center max-lg:text-[60px] max-md:text-[55px] max-sm:text-[45px]"
            >
              Developpeur
            </div>
            <div
              id="fullstack"
              className="presentationText voidTextWithBordure z-10 font-poppins text-[80px] font-semibold leading-none max-lg:text-center max-lg:text-[70px] max-md:text-[60px] max-sm:text-[50px]"
            >
              Fullstack
            </div>
            <div className="linkPadding mb-2 mt-[20px] flex flex-wrap justify-center gap-2 gap-y-3 text-[14px] max-lg:px-[16px]">
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
                  alt="logo github"
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
                  alt="logo mail"
                />
                samuel.prigent@yahoo.fr
              </a>
            </div>
          </div>
          <div className="composantContainer relative top-[34px] m-auto flex aspect-square items-center justify-center text-center max-lg:h-[290px] max-lg:min-w-[290px] max-sm:h-[250px] max-sm:min-w-[250px]">
            <div className="gradientBorder absolute left-0 right-0 h-full w-full rounded-full saturate-[0.8]"></div>
            <div className="radiantBackground z-10"> </div>
            <div className="textureBackground z-20"></div>
            <div className="badgeIconColor reactIcon absolute flex items-center justify-center rounded-full max-lg:left-[-5px] max-lg:top-[64px] max-sm:top-[57px] max-sm:size-[35px]">
              <img
                src={react}
                className="yellowSvg"
                height={25}
                width={25}
                alt="logo react"
              />
            </div>
            <div className="badgeIconColor expressIcon absolute flex items-center justify-center rounded-full max-lg:right-[8px] max-lg:top-[40px] max-sm:top-[32px] max-sm:size-[35px]">
              <img
                src={express}
                className="yellowSvg"
                height={25}
                width={25}
                alt="logo express"
              />
            </div>
            <div className="badgeIconColor tailwindIcon absolute flex items-center justify-center rounded-full max-lg:right-[26px] max-lg:top-[234px] max-sm:right-[40px] max-sm:top-[212px] max-sm:size-[35px]">
              <img
                src={tailwind}
                className="yellowSvg"
                height={25}
                width={25}
                alt="logo tailwind"
              />
            </div>
            <img
              src={composant}
              alt="svg composant"
              className="composantIcon z-30 aspect-square select-none max-lg:w-[160px] max-sm:w-[130px]"
            />
          </div>
        </div>
      </div>
      <div
        id="Projects"
        className="backgroundColor m-0 flex w-full pt-[160px] max-lg:pt-[100px] max-md:pt-[80px] max-sm:pt-[55px]"
      >
        <div className="projectContainer m-auto flex h-auto w-[87%] max-w-[1300px] flex-col gap-6 rounded-[16px] px-[20px] pb-[35px] pt-[25px] max-md:w-full max-md:rounded-none max-md:border-0 max-md:bg-transparent">
          <div className="m-auto  flex w-fit rounded-lg bg-[#1c1916] px-4 py-2 font-poppins text-2xl font-semibold leading-tight text-yellow-50">
            🚀 Mes projets
          </div>
          <div className="gridProject mt-2 grid h-[250px] w-full grid-cols-custom3 gap-4 rounded-xl max-lg:h-[340px] max-lg:grid-cols-custom2 max-md:h-[480px] max-md:grid-cols-custom1">
            <ProjectList />
          </div>
        </div>
      </div>
      <div
        id="Skills"
        className="backgroundColor m-0 box-border flex min-w-full pb-[162px] pt-[100px] max-lg:pt-[80px] max-md:pt-[70px] max-sm:pt-[60px]"
      >
        <div className="relative m-auto flex h-auto w-[87%] max-w-[1300px] flex-col gap-4 max-md:w-full max-md:px-[25px]">
          <div className="m-auto flex w-fit rounded-lg bg-[#1c1916] px-4 py-2 font-poppins text-2xl font-semibold leading-tight text-yellow-50">
            Technologies
          </div>
          <SkillsGrid />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
