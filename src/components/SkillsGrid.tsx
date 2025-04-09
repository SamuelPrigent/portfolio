import styled from "styled-components";
// assets
import next from "../assets/next.svg";
import cypress from "../assets/cypress.svg";
import react from "../assets/logo-react.svg";
import styledcomponent from "../assets/logo-styledcomponent.svg";
import typescript from "../assets/logo-typescript.svg";
import radixui from "../assets/logo-radixui.svg";
import mongodb from "../assets/logo-mongodb.svg";
import node from "../assets/logo-node.svg";
import jest from "../assets/jest.svg";
// component
import { CardTextContainer } from "./UI/StyledElements";

// styled component
const BackgroundTextureFront = styled.div`
  background-position: center;
  background-size: cover;
  filter: saturate(0.7);
  /* background-color: #3555a8;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%232d4999' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%23263e8a' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%231f337a' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%2319296a' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%23142059' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%230f1848' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%230A1036' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E"); */

  background-color: #000022;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2000' height='2000' viewBox='0 0 800 800'%3E%3Cg fill='none' %3E%3Cg stroke='%23026' stroke-width='17'%3E%3Cline x1='-8' y1='-8' x2='808' y2='808'/%3E%3Cline x1='-8' y1='792' x2='808' y2='1608'/%3E%3Cline x1='-8' y1='-808' x2='808' y2='8'/%3E%3C/g%3E%3Cg stroke='%23002163' stroke-width='16'%3E%3Cline x1='-8' y1='767' x2='808' y2='1583'/%3E%3Cline x1='-8' y1='17' x2='808' y2='833'/%3E%3Cline x1='-8' y1='-33' x2='808' y2='783'/%3E%3Cline x1='-8' y1='-783' x2='808' y2='33'/%3E%3C/g%3E%3Cg stroke='%23002060' stroke-width='15'%3E%3Cline x1='-8' y1='742' x2='808' y2='1558'/%3E%3Cline x1='-8' y1='42' x2='808' y2='858'/%3E%3Cline x1='-8' y1='-58' x2='808' y2='758'/%3E%3Cline x1='-8' y1='-758' x2='808' y2='58'/%3E%3C/g%3E%3Cg stroke='%23001f5c' stroke-width='14'%3E%3Cline x1='-8' y1='67' x2='808' y2='883'/%3E%3Cline x1='-8' y1='717' x2='808' y2='1533'/%3E%3Cline x1='-8' y1='-733' x2='808' y2='83'/%3E%3Cline x1='-8' y1='-83' x2='808' y2='733'/%3E%3C/g%3E%3Cg stroke='%23001e59' stroke-width='13'%3E%3Cline x1='-8' y1='92' x2='808' y2='908'/%3E%3Cline x1='-8' y1='692' x2='808' y2='1508'/%3E%3Cline x1='-8' y1='-108' x2='808' y2='708'/%3E%3Cline x1='-8' y1='-708' x2='808' y2='108'/%3E%3C/g%3E%3Cg stroke='%23001d56' stroke-width='12'%3E%3Cline x1='-8' y1='667' x2='808' y2='1483'/%3E%3Cline x1='-8' y1='117' x2='808' y2='933'/%3E%3Cline x1='-8' y1='-133' x2='808' y2='683'/%3E%3Cline x1='-8' y1='-683' x2='808' y2='133'/%3E%3C/g%3E%3Cg stroke='%23001c53' stroke-width='11'%3E%3Cline x1='-8' y1='642' x2='808' y2='1458'/%3E%3Cline x1='-8' y1='142' x2='808' y2='958'/%3E%3Cline x1='-8' y1='-158' x2='808' y2='658'/%3E%3Cline x1='-8' y1='-658' x2='808' y2='158'/%3E%3C/g%3E%3Cg stroke='%23001b4f' stroke-width='10'%3E%3Cline x1='-8' y1='167' x2='808' y2='983'/%3E%3Cline x1='-8' y1='617' x2='808' y2='1433'/%3E%3Cline x1='-8' y1='-633' x2='808' y2='183'/%3E%3Cline x1='-8' y1='-183' x2='808' y2='633'/%3E%3C/g%3E%3Cg stroke='%23001a4c' stroke-width='9'%3E%3Cline x1='-8' y1='592' x2='808' y2='1408'/%3E%3Cline x1='-8' y1='192' x2='808' y2='1008'/%3E%3Cline x1='-8' y1='-608' x2='808' y2='208'/%3E%3Cline x1='-8' y1='-208' x2='808' y2='608'/%3E%3C/g%3E%3Cg stroke='%23001949' stroke-width='8'%3E%3Cline x1='-8' y1='567' x2='808' y2='1383'/%3E%3Cline x1='-8' y1='217' x2='808' y2='1033'/%3E%3Cline x1='-8' y1='-233' x2='808' y2='583'/%3E%3Cline x1='-8' y1='-583' x2='808' y2='233'/%3E%3C/g%3E%3Cg stroke='%23001846' stroke-width='7'%3E%3Cline x1='-8' y1='242' x2='808' y2='1058'/%3E%3Cline x1='-8' y1='542' x2='808' y2='1358'/%3E%3Cline x1='-8' y1='-558' x2='808' y2='258'/%3E%3Cline x1='-8' y1='-258' x2='808' y2='558'/%3E%3C/g%3E%3Cg stroke='%23001743' stroke-width='6'%3E%3Cline x1='-8' y1='267' x2='808' y2='1083'/%3E%3Cline x1='-8' y1='517' x2='808' y2='1333'/%3E%3Cline x1='-8' y1='-533' x2='808' y2='283'/%3E%3Cline x1='-8' y1='-283' x2='808' y2='533'/%3E%3C/g%3E%3Cg stroke='%2300163f' stroke-width='5'%3E%3Cline x1='-8' y1='292' x2='808' y2='1108'/%3E%3Cline x1='-8' y1='492' x2='808' y2='1308'/%3E%3Cline x1='-8' y1='-308' x2='808' y2='508'/%3E%3Cline x1='-8' y1='-508' x2='808' y2='308'/%3E%3C/g%3E%3Cg stroke='%2300153c' stroke-width='4'%3E%3Cline x1='-8' y1='467' x2='808' y2='1283'/%3E%3Cline x1='-8' y1='317' x2='808' y2='1133'/%3E%3Cline x1='-8' y1='-333' x2='808' y2='483'/%3E%3Cline x1='-8' y1='-483' x2='808' y2='333'/%3E%3C/g%3E%3Cg stroke='%23001439' stroke-width='3'%3E%3Cline x1='-8' y1='342' x2='808' y2='1158'/%3E%3Cline x1='-8' y1='442' x2='808' y2='1258'/%3E%3Cline x1='-8' y1='-458' x2='808' y2='358'/%3E%3Cline x1='-8' y1='-358' x2='808' y2='458'/%3E%3C/g%3E%3Cg stroke='%23001336' stroke-width='2'%3E%3Cline x1='-8' y1='367' x2='808' y2='1183'/%3E%3Cline x1='-8' y1='417' x2='808' y2='1233'/%3E%3Cline x1='-8' y1='-433' x2='808' y2='383'/%3E%3Cline x1='-8' y1='-383' x2='808' y2='433'/%3E%3C/g%3E%3Cg stroke='%23013' stroke-width='1'%3E%3Cline x1='-8' y1='392' x2='808' y2='1208'/%3E%3Cline x1='-8' y1='-408' x2='808' y2='408'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: 190%;
`;

const BackgroundTextureBack = styled.div`
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Ccircle stroke='%231F61B6' vector-effect='non-scaling-stroke' id='a' fill='none' stroke-width='1.6' r='315'/%3E%3Cuse id='f' href='%23a' stroke-dasharray='100 100 100 9999'/%3E%3Cuse id='b' href='%23a' stroke-dasharray='250 250 250 250 250 9999'/%3E%3Cuse id='e' href='%23a' stroke-dasharray='1000 500 1000 500 9999'/%3E%3Cuse id='g' href='%23a' stroke-dasharray='1500 9999'/%3E%3Cuse id='h' href='%23a' stroke-dasharray='2000 500 500 9999'/%3E%3Cuse id='j' href='%23a' stroke-dasharray='800 800 800 800 800 9999'/%3E%3Cuse id='k' href='%23a' stroke-dasharray='1200 1200 1200 1200 1200 9999'/%3E%3Cuse id='l' href='%23a' stroke-dasharray='1600 1600 1600 1600 1600 9999'/%3E%3C/defs%3E%3Cg transform='translate(1000 750)' %3E%3Cg transform='rotate(205.2 0 0)' %3E%3Ccircle fill='%231F61B6' r='10'/%3E%3Cg transform='rotate(-159 0 0)'%3E%3Cuse href='%23f' transform='scale(.1) rotate(50 0 0)' /%3E%3Cuse href='%23f' transform='scale(.2) rotate(100 0 0)' /%3E%3Cuse href='%23f' transform='scale(.3) rotate(150 0 0)' /%3E%3C/g%3E%3Cg %3E%3Cuse href='%23b' transform='scale(.4) rotate(200 0 0)' /%3E%3Cuse href='%23z' transform='scale(.5) rotate(250 0 0)' /%3E%3C/g%3E%3Cg id='z' transform='rotate(71.55 0 0)'%3E%3Cg transform='rotate(128.25 0 0)'%3E%3Cuse href='%23b'/%3E%3Cuse href='%23b' transform='scale(1.2) rotate(90 0 0)' /%3E%3Cuse href='%23b' transform='scale(1.4) rotate(60 0 0)' /%3E%3Cuse href='%23e' transform='scale(1.6) rotate(120 0 0)' /%3E%3Cuse href='%23e' transform='scale(1.8) rotate(30 0 0)' /%3E%3C/g%3E%3C/g%3E%3Cg id='y'%3E%3Cg transform='rotate(76.95 0 0)'%3E%3Cuse href='%23e' transform='scale(1.1) rotate(20 0 0)' /%3E%3Cuse href='%23g' transform='scale(1.3) rotate(-40 0 0)' /%3E%3Cuse href='%23g' transform='scale(1.5) rotate(60 0 0)' /%3E%3Cuse href='%23h' transform='scale(1.7) rotate(-80 0 0)' /%3E%3Cuse href='%23j' transform='scale(1.9) rotate(100 0 0)' /%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(-153.9 0 0)'%3E%3Cg transform='rotate(-71.55 0 0)'%3E%3Cg transform=''%3E%3Cuse href='%23h' transform='scale(2) rotate(60 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.1) rotate(120 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.3) rotate(180 0 0)'/%3E%3Cuse href='%23h' transform='scale(2.4) rotate(240 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.5) rotate(300 0 0)'/%3E%3C/g%3E%3Cuse href='%23y' transform='scale(2) rotate(180 0 0)' /%3E%3Cuse href='%23j' transform='scale(2.7)'/%3E%3Cuse href='%23j' transform='scale(2.8) rotate(45 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.9) rotate(90 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.1) rotate(135 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.2) rotate(180 0 0)'/%3E%3C/g%3E%3Cuse href='%23k' transform='scale(3.3) rotate(225 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.5) rotate(270 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.6) rotate(315 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.7)'/%3E%3Cuse href='%23k' transform='scale(3.9) rotate(75 0 0)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
    linear-gradient(60deg, #10172457, #1f222a86);
  background-size: cover;
  background-position: center;
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
        <div className="skillsElement flex flex-col gap-4 rounded-xl p-5 text-start text-white">
          <BackgroundTextureFront className="relative flex h-[120px] items-center justify-center gap-7 overflow-hidden rounded-lg bg-[#6e63510f] py-3">
            <div className="radiantBackgroundSmall2 z-10"></div>
            <div className="relative z-40 flex items-center justify-center gap-[25px]">
              <img
                className="reactSpin lightYellowSvg z-20 mx-auto my-0 aspect-square"
                src={react}
                width={65}
                alt="logo react"
              />
              <div className="text-4xl font-light text-[#cde8ef]">+</div>
              <img
                className="lightYellowSvg"
                width={50}
                src={typescript}
                alt="typescript"
              />
            </div>
          </BackgroundTextureFront>
          <CardTextContainer>
            <div className="titleText text-xl font-semibold">Frontend</div>
            <div className="line-clamp-3 text-sm text-[#b5c1d1]">
              Maîtrise de React et Next.js pour créer des interfaces
              interactives et performantes. Typescript assure la fiabilité du
              code.
            </div>
          </CardTextContainer>
        </div>
        {/* Backend element */}
        <div className="skillsElement flex flex-col gap-4 rounded-xl p-5 text-start text-white max-lg:col-span-1">
          <BackgroundTextureBack className="relative flex h-[120px] w-full items-center justify-center gap-[55px] overflow-hidden rounded-lg px-5 max-lg:gap-[40px] max-md:gap-[30px]">
            <div className="radiantBackgroundSmall4 z-10"> </div>
            <img
              className="lightYellowSvg z-20 aspect-square max-lg:size-[45px] max-md:size-[40px] max-sm:size-[50px]"
              width={56}
              src={next}
              alt="logo express"
            />
            <img
              className="lightYellowSvg z-20 aspect-square max-lg:size-[45px] max-md:size-[40px] max-sm:size-[50px]"
              width={59}
              src={node}
              alt="logo node"
            />
            <img
              className="lightYellowSvg z-20 aspect-square max-lg:size-[45px] max-md:size-[40px] max-sm:size-[50px]"
              width={56}
              src={mongodb}
              alt="logo mongodb"
            />
          </BackgroundTextureBack>
          <CardTextContainer>
            <div className="titleText text-xl font-semibold">Backend</div>
            <div className="line-clamp-3 text-sm text-[#b5c1d1]">
              Avec Node.js, Next.js et MongoDB, je crée des solutions backend
              qui sont à la fois flexibles dans la gestion des données et
              sécurisées.
            </div>
          </CardTextContainer>
        </div>
        {/* Style */}
        <div className="skillsElement flex flex-col gap-4 rounded-xl p-5 text-start text-white">
          <div className="styleGradient flex h-[120px] w-full items-center justify-center gap-[25px] rounded-lg">
            <img
              className="lightYellowSvg aspect-square"
              width={36}
              src={radixui}
              alt="logo shadcn"
            />
            <div className="text-4xl font-light text-[#cde8ef]">+</div>
            <img
              className="lightYellowSvg aspect-square"
              width={36}
              src={styledcomponent}
              alt="logo styled component"
            />
          </div>
          <CardTextContainer>
            <div className="titleText text-xl font-semibold">Design</div>
            <div className="line-clamp-3 text-sm text-[#b5c1d1]">
              Utilisation de la librairie Radix UI avec Styled-Components pour
              du style in js.
            </div>
          </CardTextContainer>
        </div>
        {/* Testing */}
        <div className="skillsElement flex flex-col gap-4 rounded-xl p-5 text-start text-white">
          <div className="relative flex h-[120px] w-full justify-center overflow-hidden rounded-lg">
            <div className="radiantBackgroundSmall z-10"> </div>
            <div className="relative z-40 flex items-center justify-center gap-[25px]">
              <img
                className="lightYellowSvg z-20 aspect-square"
                width={55}
                src={jest}
                alt="logo vitest"
              />
              <div className="text-4xl font-light text-[#cde8ef]">+</div>
              <img
                className="brightness-90 saturate-0"
                width={50}
                src={cypress}
                alt="cypress"
              />
            </div>
          </div>
          <CardTextContainer>
            <div className="titleText text-xl font-semibold">Testing</div>
            <div className="line-clamp-3 text-sm text-[#b5c1d1]">
              Ecriture de tout type de test pour le Backend et le Frontend à
              l'aide de librairies tel que Jest, Jasmine et Cypress.
            </div>
          </CardTextContainer>
        </div>
        {/* end grid skills */}
      </div>
    </>
  );
}
