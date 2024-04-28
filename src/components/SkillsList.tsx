// component
import SkillElement from "./SkillElement";
// design
import tailwindcss from "../assets/logo-tailwindcss.svg";
import radixui from "../assets/logo-radixui.svg";
import figma from "../assets/logo-figma.svg";
// logo front
import react from "../assets/logo-react.svg";
import typescript from "../assets/logo-typescript.svg";
import next from "../assets/logo-next.svg";
// logo back
import node from "../assets/logo-node.svg";
import express from "../assets/logo-express.svg";
import mongodb from "../assets/logo-mongodb.svg";
// logo autres
import git from "../assets/logo-git.svg";
import github from "../assets/github.svg";
import vitest from "../assets/logo-vitest.svg";

function SkillsList() {
  return (
    <>
      {/* <div className="mx-auto mt-[30px] h-[6px] w-[89%] rounded-full bg-black opacity-20"></div> */}
      <div className="gridSkills grid w-full max-w-[1300px] gap-4 rounded-xl max-md:h-auto max-md:grid-cols-custom2 max-md:px-[30px] max-sm:px-[15px]">
        <div className="flex flex-col gap-2 rounded-xl py-4">
          <div className="titleText mb-2 text-xl font-semibold">Design</div>
          <SkillElement src={tailwindcss} text={"Tailwind"} />
          <SkillElement src={radixui} text={"RadixUI"} />
          <SkillElement src={figma} text={"Figma"} />
        </div>
        <div className="flex flex-col gap-2 rounded-xl py-4">
          <div className="titleText mb-2 text-xl font-semibold">Front-end</div>
          <SkillElement src={react} text={"React"} />
          <SkillElement src={typescript} text={"Typescript"} />
          <SkillElement src={next} text={"Next"} />
        </div>
        <div className="flex flex-col gap-2 rounded-xl py-4">
          <div className="titleText mb-2 text-xl font-semibold">Back-end</div>
          <SkillElement src={node} text={"Node JS"} />
          <SkillElement src={express} text={"Express"} />
          <SkillElement src={mongodb} text={"MongoDB"} />
        </div>
        <div className="flex flex-col gap-2 rounded-xl py-4">
          <div className="titleText mb-2 text-xl font-semibold">Autres</div>
          <SkillElement src={git} text={"Git"} />
          <SkillElement src={github} text={"Github"} />
          <SkillElement src={vitest} text={"Vitest"} />
        </div>
      </div>
    </>
  );
}

export default SkillsList;
