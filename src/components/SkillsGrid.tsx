// import
import react from "../assets/logo-react.svg";
import tailwind from "../assets/logo-tailwindcss.svg";
import typescript from "../assets/logo-typescript.svg";
import radixui from "../assets/logo-radixui.svg";
import express from "../assets/logo-express.svg";
import mongodb from "../assets/logo-mongodb.svg";
import node from "../assets/logo-node.svg";
import vitest from "../assets/logo-vitest.svg";
import styled from "styled-components";

// styled component
const BackgroundTextureFront = styled.div`
  background-position: center;
  background-color: #2d2a24;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%232a2721' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%2326231f' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%2323201c' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%231f1d19' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%231c1a17' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%23191614' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%23151311' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E");
  background-size: cover;
`;

const BackgroundTextureBack = styled.div`
  background-position: center;
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Ccircle stroke='%233E3A2F' vector-effect='non-scaling-stroke' id='a' fill='none' stroke-width='1' r='315'/%3E%3Cuse id='f' href='%23a' stroke-dasharray='100 100 100 9999'/%3E%3Cuse id='b' href='%23a' stroke-dasharray='250 250 250 250 250 9999'/%3E%3Cuse id='e' href='%23a' stroke-dasharray='1000 500 1000 500 9999'/%3E%3Cuse id='g' href='%23a' stroke-dasharray='1500 9999'/%3E%3Cuse id='h' href='%23a' stroke-dasharray='2000 500 500 9999'/%3E%3Cuse id='j' href='%23a' stroke-dasharray='800 800 800 800 800 9999'/%3E%3Cuse id='k' href='%23a' stroke-dasharray='1200 1200 1200 1200 1200 9999'/%3E%3Cuse id='l' href='%23a' stroke-dasharray='1600 1600 1600 1600 1600 9999'/%3E%3C/defs%3E%3Cg transform='translate(1000 750)' %3E%3Cg transform='rotate(0 0 0)' %3E%3Ccircle fill='%233E3A2F' r='10'/%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23f' transform='scale(.1) rotate(50 0 0)' /%3E%3Cuse href='%23f' transform='scale(.2) rotate(100 0 0)' /%3E%3Cuse href='%23f' transform='scale(.3) rotate(150 0 0)' /%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23b' transform='scale(.4) rotate(200 0 0)' /%3E%3Cuse href='%23z' transform='scale(.5) rotate(250 0 0)' /%3E%3C/g%3E%3Cg id='z' transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23b'/%3E%3Cuse href='%23b' transform='scale(1.2) rotate(90 0 0)' /%3E%3Cuse href='%23b' transform='scale(1.4) rotate(60 0 0)' /%3E%3Cuse href='%23e' transform='scale(1.6) rotate(120 0 0)' /%3E%3Cuse href='%23e' transform='scale(1.8) rotate(30 0 0)' /%3E%3C/g%3E%3C/g%3E%3Cg id='y' transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23e' transform='scale(1.1) rotate(20 0 0)' /%3E%3Cuse href='%23g' transform='scale(1.3) rotate(-40 0 0)' /%3E%3Cuse href='%23g' transform='scale(1.5) rotate(60 0 0)' /%3E%3Cuse href='%23h' transform='scale(1.7) rotate(-80 0 0)' /%3E%3Cuse href='%23j' transform='scale(1.9) rotate(100 0 0)' /%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23h' transform='scale(2) rotate(60 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.1) rotate(120 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.3) rotate(180 0 0)'/%3E%3Cuse href='%23h' transform='scale(2.4) rotate(240 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.5) rotate(300 0 0)'/%3E%3C/g%3E%3Cuse href='%23y' transform='scale(2) rotate(180 0 0)' /%3E%3Cuse href='%23j' transform='scale(2.7)'/%3E%3Cuse href='%23j' transform='scale(2.8) rotate(45 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.9) rotate(90 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.1) rotate(135 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.2) rotate(180 0 0)'/%3E%3C/g%3E%3Cuse href='%23k' transform='scale(3.3) rotate(225 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.5) rotate(270 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.6) rotate(315 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.7)'/%3E%3Cuse href='%23k' transform='scale(3.9) rotate(75 0 0)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
    linear-gradient(60deg, #241c1058, #2a271f87);
  background-repeat: no-repeat;
  background-size: 500% 500%;
`;

// component
export default function SkillsGrid() {
  return (
    <>
      {/* grid */}
      <div className="grid grid-cols-3 gap-4 pt-[15px] max-lg:grid-cols-2 max-sm:grid-cols-1">
        {/* react */}
        <div className="flex flex-col justify-between gap-4 rounded-xl border border-[#373633] bg-[#1F1E1A] p-5 text-start text-white">
          <BackgroundTextureFront className="relative flex h-[120px] items-center justify-center gap-7 overflow-hidden rounded-lg bg-[#6e63510f] py-3">
            <div className="radiantBackgroundSmall2 z-10"></div>
            <img
              className="reactSpin lightYellowSvg z-20 mx-auto my-0 aspect-square"
              src={react}
              width={80}
              alt="logo react"
            />
          </BackgroundTextureFront>
          <div className="flex flex-col gap-1">
            <div className="titleText text-xl font-semibold">React</div>
            <div className="line-clamp-3 text-sm text-medGray">
              Spécialisé en React et Next, je développe un code évolutif et
              maintenable axé sur la scalabilité.
            </div>
          </div>
        </div>
        {/* tailwind */}
        <div className="flex flex-col justify-between gap-4 rounded-xl border border-[#373633] bg-[#211F1C] p-5 text-start text-white">
          <div className="tailwindGradient flex h-[120px] w-full items-center justify-center gap-[25px] rounded-lg">
            <img
              className="lightYellowSvg aspect-square"
              width={36}
              src={tailwind}
              alt="logo tailwind"
            />
            <div className="text-4xl font-light text-[#EFEFCD]">+</div>
            <img
              className="lightYellowSvg aspect-square"
              width={36}
              src={radixui}
              alt="logo radixui"
            />
          </div>
          <div className="relative flex flex-col gap-1">
            <div className="titleText text-xl font-semibold">Design</div>
            <div className="line-clamp-3 text-sm text-medGray">
              Intégration avec tailwind en utilisant des librairies de
              composants non stylisés comme Radix ou Shadcn.
            </div>
          </div>
        </div>
        {/* typescript */}
        <div className="flex flex-col justify-between gap-4 rounded-xl border border-[#373633] bg-[#211F1C] p-5 text-start text-white max-lg:area-2n2 max-sm:area-1n1">
          <BackgroundTextureFront className="relative flex h-[120px] w-full justify-center overflow-hidden rounded-lg bg-[#6e63510f]">
            <div className="radiantBackgroundSmall2 z-10"></div>
            <img
              className="lightYellowSvg z-20 aspect-square"
              width={65}
              src={typescript}
              alt="logo typescript"
            />
          </BackgroundTextureFront>
          <div className="flex flex-col gap-1">
            <div className="titleText text-xl font-semibold">Typescript</div>
            <div className="line-clamp-3 text-sm text-medGray">
              Typescript me permet de repérer les erreurs plus rapidement tout
              en restant productif.
            </div>
          </div>
        </div>
        {/* Backend */}
        <div className="col-span-2 flex flex-col justify-between gap-4 rounded-xl border border-[#373633] bg-[#211F1C] p-5 text-start text-white max-lg:col-span-1">
          <BackgroundTextureBack className="relative flex h-[120px] w-full items-center justify-center gap-[55px] overflow-hidden rounded-lg px-5 max-lg:gap-[40px] max-md:gap-[30px]">
            <div className="radiantBackgroundSmall3 z-10"> </div>
            <img
              className="lightYellowSvg z-20 aspect-square max-lg:size-[45px] max-md:size-[40px] max-sm:size-[50px]"
              width={67}
              src={node}
              alt="logo node"
            />
            <img
              className="lightYellowSvg z-20 aspect-square max-lg:size-[45px] max-md:size-[40px] max-sm:size-[50px]"
              width={65}
              src={express}
              alt="logo express"
            />
            <img
              className="lightYellowSvg z-20 aspect-square max-lg:size-[45px] max-md:size-[40px] max-sm:size-[50px]"
              width={65}
              src={mongodb}
              alt="logo mongodb"
            />
          </BackgroundTextureBack>
          <div className="flex flex-col gap-1">
            <div className="titleText text-xl font-semibold">Backend</div>
            <div className="line-clamp-3 text-sm text-medGray">
              Avec Node.js, Express et MongoDB, je crée des solutions backend
              qui sont à la fois flexibles dans la gestion des données et
              sécurisées.
            </div>
          </div>
        </div>
        {/* Testing */}
        <div className="flex flex-col justify-between gap-4 rounded-xl border border-[#373633] bg-[#211F1C] p-5 text-start text-white">
          <div className="relative flex h-[120px] w-full justify-center overflow-hidden rounded-lg">
            <div className="radiantBackgroundSmall z-10"> </div>
            <img
              className="lightYellowSvg z-20 aspect-square"
              width={70}
              src={vitest}
              alt="logo vitest"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="titleText text-xl font-semibold">Vitest</div>
            <div className="line-clamp-3 text-sm text-medGray">
              Ecriture de test Back et Front à l'aide de librairie tel que
              Vitest, Mocha ou Jest.
            </div>
          </div>
        </div>
        {/* end grid skills */}
      </div>
    </>
  );
}
