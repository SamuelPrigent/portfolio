import react from "../assets/logo-react.svg";
import tailwind from "../assets/logo-tailwindcss.svg";
import typescript from "../assets/logo-typescript.svg";
import radixui from "../assets/logo-radixui.svg";
import express from "../assets/logo-express.svg";
import mongodb from "../assets/logo-mongodb.svg";
import node from "../assets/logo-node.svg";
import vitest from "../assets/logo-vitest.svg";

export default function SkillsGrid() {
  return (
    <>
      {/* grid */}
      <div className="grid grid-cols-3 gap-4 pt-[15px] max-lg:grid-cols-2 max-sm:grid-cols-1">
        {/* react */}
        <div className="flex flex-col justify-between gap-4 rounded-xl border border-[#383530] bg-[#1F1E1A] p-5 text-start text-white">
          <div className="backgroundTexture2 relative flex h-[120px] items-center justify-center gap-7 overflow-hidden rounded-lg bg-[#6e63510f] py-3">
            <div className="radiantBackgroundSmall2 z-10"></div>
            <img
              className="reactSpin lightYellowSvg z-20 mx-auto my-0 aspect-square"
              src={react}
              width={80}
              alt="logo react"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="titleText text-xl font-semibold">React</div>
            <div className="line-clamp-3 text-sm text-medGray">
              Spécialisé en React et Next, je développe un code évolutif et
              maintenable axé sur la scalabilité.
            </div>
          </div>
        </div>
        {/* tailwind */}
        <div className="flex flex-col justify-between gap-4 rounded-xl border border-[#383530] bg-[#211F1C] p-5 text-start text-white">
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
        <div className="flex flex-col justify-between gap-4 rounded-xl border border-[#383530] bg-[#211F1C] p-5 text-start text-white max-lg:area-2n2 max-sm:area-1n1">
          <div className="backgroundTexture2 relative flex h-[120px] w-full justify-center overflow-hidden rounded-lg bg-[#6e63510f]">
            <div className="radiantBackgroundSmall2 z-10"></div>
            <img
              className="lightYellowSvg z-20 aspect-square"
              width={65}
              src={typescript}
              alt="logo typescript"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="titleText text-xl font-semibold">Typescript</div>
            <div className="line-clamp-3 text-sm text-medGray">
              Typescript me permet de repérer les erreurs plus rapidement tout
              en restant productif.
            </div>
          </div>
        </div>
        {/* Backend */}
        <div className="col-span-2 flex flex-col justify-between gap-4 rounded-xl border border-[#383530] bg-[#211F1C] p-5 text-start text-white max-lg:col-span-1">
          <div className="backgroundTexture3 relative flex h-[120px] w-full items-center justify-center gap-[55px] overflow-hidden rounded-lg px-5 max-lg:gap-[40px] max-md:gap-[30px]">
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
          </div>
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
        <div className="flex flex-col justify-between gap-4 rounded-xl border border-[#383530] bg-[#211F1C] p-5 text-start text-white">
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
