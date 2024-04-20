// radix css
import "@radix-ui/themes/styles.css";
import { Button, Badge, Switch } from "@radix-ui/themes";
import "./style/App.scss"; // custom css after radix
// components
import SkillsIn4Column from "./components/skillsIn4Column";
// icons
import composant from "./assets/composant.svg";
import grid from "./assets/grid.svg";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.svg";
import mail from "./assets/mail.svg";
import leaf from "./assets/leaf.svg";
import underline from "./assets/underline.svg";
//

function App() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector("#header");
    if (header) {
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
        header.classList.remove("top-position");
      } else {
        header.classList.remove("scrolled");
        header.classList.add("top-position");
      }
    }
  });

  return (
    <>
      {/* Header */}
      <div
        id="header"
        className="top-position fixed top-0 z-40 flex h-[60px] w-full items-center justify-between px-7 py-2"
      >
        <div className="flex items-center gap-2">
          <img
            className="greenSvg"
            src={leaf}
            height={22}
            width={22}
            alt="tonerre"
          />
          <div className="gradientName text-lg font-semibold">SamUX</div>
        </div>
        <div className="flex gap-4">
          <div className="px-1 py-1 text-[15px] font-[500] text-green-50 hover:cursor-pointer">
            Mes projets
          </div>
          <div className="px-1 py-1 text-[15px] font-[500] text-green-50 hover:cursor-pointer">
            Skills
          </div>
          <div className="px-1 py-1 text-[15px] font-[500] text-green-50 hover:cursor-pointer">
            Contact
          </div>
          <Switch
            size="2"
            variant="surface"
            className="my-auto rounded-full bg-[#414141]"
            defaultChecked
          />
        </div>
      </div>
      {/* Presentation */}
      <div className="m-0 box-border flex min-w-full bg-[#1b1b1f] ">
        {/* <div className="max-w-[1100px] m-auto flex items-center justify-around px-10"> */}
        <div className="max-w-11/12 m-auto flex items-center justify-around px-10 pt-[35px]">
          {/* <div className="flex h-[450px] w-full"> */}
          <div className="flex h-[450px] w-full gap-24">
            {/* <div className="relative my-auto flex w-[750px] flex-col rounded-lg pt-[100px] text-start font-bold "> */}
            <div className="relative my-auto flex flex-col rounded-lg pt-[70px] text-start font-bold ">
              <img
                className="z-1 absolute left-[0px] top-[45px]"
                src={grid}
                height={30}
                width={30}
                alt="grille"
              />
              <img
                className="absolute left-[219px] top-[130px] rotate-[358deg]"
                src={underline}
                height={30}
                width={150}
                alt="underline"
              />
              <div className="gradientName z-10 text-5xl leading-tight">
                Samuel Prigent
              </div>
              <div className="z-10 text-7xl leading-tight text-white">
                Developpeur
              </div>
              <div className="voidTextWithBordure z-10 font-mono text-7xl leading-none">
                Fullstack
              </div>
              <div className="mt-[22px] flex gap-2 text-[14px]">
                <Button radius="full" className="greenButton flex gap-2 px-4">
                  <img src={linkedin} height={18} width={18} alt="Code" />
                  LinkedIn
                </Button>
                <Button radius="full" className="grayButton flex gap-2 px-4">
                  <img
                    className="whiteSvg"
                    src={github}
                    height={18}
                    width={18}
                    alt="Code"
                  />
                  Github
                </Button>
                <Button radius="full" className="grayButton flex gap-2 px-4">
                  <img
                    className="whiteSvg"
                    src={mail}
                    height={18}
                    width={18}
                    alt="Code"
                  />
                  samuel.prigent@yahoo.fr
                </Button>
              </div>
            </div>
            <div className="relative top-[34px] m-auto flex aspect-square h-[350px] min-w-[350px] items-center justify-center text-center">
              <div className="gradientBorder absolute left-0 right-0 h-full w-full rounded-full"></div>
              <div className="radiantBackground z-10"> </div>
              <div className="textureBackground z-20"></div>
              <img
                src={composant}
                height={180}
                width={180}
                alt="composant"
                className="z-30 aspect-square select-none"
              />
            </div>
          </div>
        </div>
      </div>
      {/* projets */}
      <div className="m-0 box-border flex min-w-full bg-[#1b1b1f] pt-[100px]">
        <div className="m-auto flex h-auto w-11/12 flex-col gap-5 px-10 ">
          <Badge className="badgeSectionColor m-auto flex gap-2 rounded-lg px-4 py-2 text-lg font-semibold leading-tight ">
            <div>Mes projets</div>
            <div>🚀</div>
          </Badge>
          <div className="grid-cols-custom3 mt-2 grid h-[270px] w-full gap-4 rounded-xl">
            <div className="rounded-xl border border-[#2d302c]"></div>
            <div className="rounded-xl border border-[#2d302c]"></div>
            <div className="rounded-xl border border-[#2d302c]"></div>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className="m-0 box-border flex min-w-full bg-[#1b1b1f] pb-[70px] pt-[90px]">
        <div className="relative m-auto flex h-auto w-11/12 flex-col gap-5 px-10 ">
          <Badge className="badgeSectionColor start m-auto flex gap-2 rounded-lg px-4 py-2 text-lg font-semibold leading-tight ">
            <div>Skills</div>
          </Badge>
          <SkillsIn4Column />
        </div>
      </div>
      {/* footer */}
      <div className="box-border flex h-[75px] min-w-full items-center justify-center border-t border-gray-950 bg-[#1b1b1f] p-[35px] text-sm text-[#828582]">
        Copyright © 2024 - Tous droits réservés. Réalisé par SamUX
      </div>
    </>
  );
}

export default App;
