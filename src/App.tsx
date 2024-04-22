// radix css
import "@radix-ui/themes/styles.css";
import { Button, Badge } from "@radix-ui/themes";
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
import react from "./assets/logo-react.svg";
import tailwind from "./assets/logo-tailwindcss.svg";
import express from "./assets/logo-express.svg";
//
import kasa from "./assets/preview-kasa.png";
import fifo from "./assets/preview-fifo.png";
import lespetitsplats from "./assets/preview-lespetitsplats.png";
//

function App() {
  // scroll header
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
          <div className="gradientText text-lg font-semibold">SamUX</div>
        </div>
        <div className="flex gap-4">
          <a
            href="#Projects"
            className="px-1 py-1 text-[15px] font-[500] text-green-50 hover:cursor-pointer"
          >
            Mes projets
          </a>
          <a
            href="#Skills"
            className="px-1 py-1 text-[15px] font-[500] text-green-50 hover:cursor-pointer"
          >
            Compétences
          </a>
          {/* <Switch
            size="2"
            variant="surface"
            color="gray"
            className=" my-auto rounded-full bg-[#414141]"
            defaultChecked
          /> */}
        </div>
      </div>
      {/* Presentation */}
      <div className="m-0 box-border flex min-w-full bg-[#1b1b1f] ">
        <div className="max-w-11/12 m-auto flex items-center justify-around px-10 pt-[35px]">
          <div className="presentationContainer">
            <div className="presentationContainerLeft relative my-auto flex flex-col rounded-lg text-start font-bold ">
              <img
                className="gridIcon z-1 absolute left-[0px] top-[45px]"
                src={grid}
                height={30}
                width={30}
                alt="grille"
              />
              <img
                className="presentationUnderline absolute rotate-[358deg]"
                src={underline}
                height={30}
                width={150}
                alt="underline"
              />
              <div className="presentationText gradientText z-10 text-5xl leading-tight">
                Samuel Prigent
              </div>
              <div className="presentationText z-10 text-7xl leading-tight text-white">
                Developpeur
              </div>
              <div className="presentationText voidTextWithBordure z-10 font-mono text-7xl leading-none">
                Fullstack
              </div>
              <div className="mt-[22px] flex flex-wrap justify-center gap-2 text-[14px]">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/samuel-prigent/"
                >
                  <Button
                    radius="full"
                    className="greenButton flex h-[38px] gap-2"
                  >
                    <img src={linkedin} height={18} width={18} alt="Code" />
                    LinkedIn
                  </Button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/SamuelPrigent?tab=repositories"
                >
                  <Button
                    radius="full"
                    className="grayButton flex h-[38px] gap-2"
                  >
                    <img
                      className="whiteSvg"
                      src={github}
                      height={18}
                      width={18}
                      alt="Code"
                    />
                    Github
                  </Button>
                </a>
                <a href="mailto:samuel.prigent@yahoo.fr">
                  <Button
                    radius="full"
                    className="grayButton flex h-[38px] gap-2"
                  >
                    <img
                      className="whiteSvg"
                      src={mail}
                      height={18}
                      width={18}
                      alt="Code"
                    />
                    samuel.prigent@yahoo.fr
                  </Button>
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
      </div>
      {/* projets */}
      <div
        id="Projects"
        className="m-0 box-border flex min-w-full bg-[#1b1b1f] pt-[110px]"
      >
        <div className="projectContainer flex h-auto flex-col gap-8">
          <Badge className="badgeSectionColor m-auto flex gap-2 rounded-lg px-4 py-2 text-lg font-semibold leading-tight ">
            <div>Mes projets</div>
            <div>🚀</div>
          </Badge>
          <div className="gridProject mt-2 grid w-full gap-4 rounded-xl">
            <a
              target="_blank"
              href="https://github.com/SamuelPrigent/FIFO"
              className="group relative overflow-hidden rounded-xl text-start hover:cursor-pointer"
            >
              <div className="absolute inset-0 h-full w-full rounded-xl">
                <img
                  className="brightness-85 absolute inset-0 m-auto h-[98%] w-[99%] rounded-[10px] object-cover object-top"
                  src={fifo}
                  alt="screen site fifo"
                />
              </div>
              <div className="absolute inset-0 flex h-full w-full flex-col gap-1 rounded-[11px] bg-[#212321de] p-6 backdrop-blur-[3px] transition-opacity group-hover:opacity-0">
                <div className="text-xl font-bold text-green-100">FIFO</div>
                <div className="text-normal line-clamp-[7] text-gray-300 max-[1020px]:line-clamp-[2]">
                  Conception d'un système de file d’attente prioritaire (FIFO :
                  First In First Out), permettant l’ajout d’actions variées,
                  consommant différents types de crédits. Attention particulière
                  apporté à la scalabilité.
                </div>
              </div>
            </a>

            <a
              target="_blank"
              href="https://samuelprigent.github.io/Kasa/"
              className="group relative overflow-hidden rounded-xl text-start hover:cursor-pointer"
            >
              <div className="absolute inset-0 h-full w-full rounded-xl">
                <img
                  className="brightness-85 absolute inset-0 m-auto h-[99%] w-[99%] rounded-[10px] object-cover object-top"
                  src={kasa}
                  alt="screen site kasa"
                />
              </div>
              <div className="absolute inset-0 flex h-full w-full flex-col gap-1 rounded-[11px] bg-[#212321de] p-6 backdrop-blur-[3px] transition-opacity group-hover:opacity-0">
                <div className="text-xl font-bold text-green-100">Kasa </div>
                <div className="text-normal line-clamp-[7] text-gray-300 max-[1020px]:line-clamp-[2]">
                  Développement front de l’application avec une intégration
                  responsive, la mise en place de React Router permettant une
                  navigation fluide, accompagné d'une interface intuitive.
                </div>
              </div>
            </a>

            <a
              target="_blank"
              href="https://samuelprigent.github.io/LesPetitsPlats/"
              className="group relative overflow-hidden rounded-xl text-start hover:cursor-pointer"
            >
              <div className="absolute inset-0 h-full w-full rounded-xl">
                <img
                  className="brightness-85 absolute inset-0 m-auto h-[99%] w-[99%] rounded-[10px] object-cover object-top"
                  src={lespetitsplats}
                  alt="screen site les petits plats"
                />
              </div>
              <div className="absolute inset-0 flex h-full w-full flex-col gap-1 rounded-[11px] bg-[#212321de] p-6 backdrop-blur-[3px] transition-opacity group-hover:opacity-0">
                <div className="text-xl font-bold text-green-100">
                  Les Petits Plats
                </div>
                <div className="text-normal line-clamp-[7] text-gray-300 max-[1020px]:line-clamp-[2]">
                  Réalisation d’un algorithme de recherche de recettes de
                  cuisines. Gestion de différents filtres successifs (texte
                  simple, ingrédients, appareils, ustensiles).
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div
        id="Skills"
        className="m-0 box-border flex min-w-full bg-[#1b1b1f] pb-[100px] pt-[70px]"
      >
        <div className="relative m-auto flex h-auto w-10/12 flex-col gap-5">
          <Badge className="badgeSectionColor start m-auto flex gap-2 rounded-lg px-4 py-2 text-lg font-semibold leading-tight ">
            <div>Compétences</div>
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
