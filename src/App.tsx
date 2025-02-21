import "./style/App.scss"; // custom css after unstyled lib import
// components
import Header from "./components/Header.tsx";
import { Spotlight } from "./components/Spotlight.tsx";
import Footer from "./components/Footer.tsx";
import PresentationLeft from "./components/PresentationLeft.tsx";
import PresentationRight from "./components/PresentationRightMe.tsx";
import ProjectList from "./components/ProjectList.tsx";
import SkillsGrid from "./components/SkillsGrid.tsx";
// assets
import arrow from "./assets/arrow.svg";
import BubbleBackground from "./components/BubbleBackground.tsx";

function App() {
  // scroll header
  window.addEventListener("scroll", function () {
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
  });

  return (
    <>
      <Header />
      <div className="overflow-hidden">
        <Spotlight className="left-[90px] top-[40px] z-50" fill="#dad5b6e2" />
      </div>
      <div className="backgroundColor m-0 box-border flex min-w-full">
        {/* ---- array ---- */}
        <svg
          aria-hidden="true"
          className="mask pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        >
          <defs>
            <pattern
              id=":r2:"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
              x="-1"
              y="-1"
            >
              <path d="M.5 80V.5H80" fill="none" strokeDasharray="0"></path>
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#:r2:)"
          ></rect>
          {/* ---- array ---- */}
        </svg>
        <div className="presentationContainer max-w-11/12 m-auto flex h-[450px] items-center justify-around gap-[96px] px-[40px] pb-0 pt-[105px] max-lg:h-auto max-lg:flex-col max-lg:gap-[15px] max-sm:px-0 max-sm:py-[30px]">
          <PresentationLeft />
          <PresentationRight />
        </div>
      </div>
      <div
        id="Projects"
        className="backgroundColor m-0 mt-[60px] flex w-full pt-[220px] max-lg:pt-[100px] max-md:pt-[80px] max-sm:pt-[55px]"
      >
        <img id="arrow" src={arrow}></img>
        <div className="projectContainer z-10 m-auto flex h-auto w-[87%] max-w-[1300px] flex-col gap-6 rounded-[16px] px-[20px] pb-[35px] pt-[25px] max-md:w-full max-md:rounded-none max-md:border-0 max-md:bg-transparent">
          <div className="sectionTitle m-auto flex w-fit rounded-lg px-5 py-2 font-poppins text-[20px] font-semibold leading-tight text-blue-50">
            🚀 Projets
          </div>
          <div className="gridProject mt-2 grid h-[250px] w-full grid-cols-custom3 gap-4 rounded-xl max-lg:h-[340px] max-lg:grid-cols-custom2 max-md:h-[480px] max-md:grid-cols-custom1">
            <ProjectList />
          </div>
        </div>
      </div>
      <div
        id="Skills"
        className="backgroundColor relative z-10 m-0 box-border flex min-w-full pb-[180px] pt-[160px] max-lg:pt-[80px] max-md:pt-[70px] max-sm:pt-[60px]"
      >
        <div className="relative m-auto flex h-auto w-[87%] max-w-[1300px] flex-col gap-4 max-md:w-full max-md:px-[25px]">
          <div className="sectionTitle m-auto flex w-fit rounded-lg px-5 py-2 font-poppins text-[22px] font-semibold leading-tight text-yellow-50">
            Technologies
          </div>
          <SkillsGrid />
        </div>
      </div>
      <Footer />
      <BubbleBackground />
    </>
  );
}

export default App;
