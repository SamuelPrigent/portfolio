import "./style/App.scss"; // custom css after unstyled lib import
// components
import Header from "./components/Header.tsx";
import { Spotlight } from "./components/Spotlight.tsx";
import Footer from "./components/Footer.tsx";
import PresentationLeft from "./components/PresentationLeft.tsx";
import PresentationRight from "./components/PresentationRight.tsx";
import ProjectList from "./components/ProjectList.tsx";
import SkillsGrid from "./components/SkillsGrid.tsx";
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
        <div className="presentationContainer max-w-11/12 m-auto flex h-[450px] items-center justify-around gap-[96px] px-[40px] pb-0 pt-[90px] max-lg:h-auto max-lg:flex-col max-lg:gap-[15px] max-sm:px-0 max-sm:py-[30px]">
          <PresentationLeft />
          <PresentationRight />
        </div>
      </div>
      <div
        id="Projects"
        className="backgroundColor m-0 mt-[60px] flex w-full pt-[100px] max-lg:pt-[100px] max-md:pt-[80px] max-sm:pt-[55px]"
      >
        <div className="projectContainer m-auto flex h-auto w-[87%] max-w-[1300px] flex-col gap-6 rounded-[16px] px-[20px] pb-[35px] pt-[25px] max-md:w-full max-md:rounded-none max-md:border-0 max-md:bg-transparent">
          <div className="m-auto  flex w-fit rounded-lg bg-[#1c1916] px-4 py-2 font-poppins text-[22px] font-semibold leading-tight text-yellow-50">
            🚀 Mes projets
          </div>
          <div className="gridProject mt-2 grid h-[250px] w-full grid-cols-custom3 gap-4 rounded-xl max-lg:h-[340px] max-lg:grid-cols-custom2 max-md:h-[480px] max-md:grid-cols-custom1">
            <ProjectList />
          </div>
        </div>
      </div>
      <div
        id="Skills"
        className="backgroundColor relative m-0 box-border flex min-w-full pb-[160px] pt-[100px] max-lg:pt-[80px] max-md:pt-[70px] max-sm:pt-[60px]"
      >
        <div className="relative m-auto flex h-auto w-[87%] max-w-[1300px] flex-col gap-4 max-md:w-full max-md:px-[25px]">
          <div className="m-auto flex w-fit rounded-lg bg-[#1c1916] px-4 py-2 font-poppins text-[22px] font-semibold leading-tight text-yellow-50">
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
