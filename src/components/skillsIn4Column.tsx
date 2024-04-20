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

function SkillsIn4Column() {
  return (
    <>
      <div className="grid-cols-custom4 mt-2 grid h-[270px] w-full gap-4 rounded-xl">
        <div className="flex flex-col gap-2 rounded-xl py-4">
          <div className="mb-2 text-xl font-semibold text-green-100">
            Design
          </div>
          <div className="mx-auto my-0 flex gap-1">
            <img
              src={tailwindcss}
              className="whiteSvg"
              height={18}
              width={18}
              alt="logo react"
            />
            <div className="text-lg text-gray-50">Tailwind</div>
          </div>

          <div className="mx-auto my-0 flex gap-1">
            <img
              src={radixui}
              className="whiteSvg"
              height={18}
              width={18}
              alt="logo react"
            />
            <div className="text-lg text-gray-50">RadixUI</div>
          </div>
          <div className="mx-auto my-0 flex gap-1">
            <img
              src={figma}
              className="whiteSvg"
              height={18}
              width={18}
              alt="logo react"
            />
            <div className="text-lg text-gray-50">Figma</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-xl py-4">
          <div className="mb-2 text-xl font-semibold text-green-100">
            Front-end
          </div>
          <div className="mx-auto my-0 flex gap-1 ">
            <img
              src={react}
              className="whiteSvg"
              height={18}
              width={18}
              alt="logo react"
            />
            <div className="text-lg text-gray-50">React</div>
          </div>
          <div className="mx-auto my-0 flex gap-1">
            <img
              src={typescript}
              className="whiteSvg"
              height={18}
              width={18}
              alt="logo react"
            />
            <div className="text-lg text-gray-50">Typescript</div>
          </div>
          <div className="mx-auto my-0 flex gap-1">
            <img
              src={next}
              className="whiteSvg"
              height={18}
              width={18}
              alt="logo react"
            />
            <div className="text-lg text-gray-50">Next</div>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl py-4">
          <div className="mb-2 text-xl font-semibold text-green-100">
            Back-end
          </div>
          <div className="mx-auto my-0 flex gap-1">
            <img
              src={node}
              className="whiteSvg"
              height={18}
              width={18}
              alt="logo react"
            />
            <div className="text-lg text-gray-50">Node JS</div>
          </div>
          <div className="mx-auto my-0 flex gap-1">
            <img
              src={express}
              className="whiteSvg"
              height={18}
              width={18}
              alt="logo react"
            />
            <div className="text-lg text-gray-50">Express</div>
          </div>
          <div className="mx-auto my-0 flex gap-1">
            <img
              src={mongodb}
              className="whiteSvg"
              height={18}
              width={18}
              alt="logo react"
            />
            <div className="text-lg text-gray-50">MongoDB</div>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl py-4">
          <div className="mb-2 text-xl font-semibold text-green-100">
            Autres
          </div>
          <div className="mx-auto my-0 flex gap-1">
            <img
              src={git}
              className="whiteSvg"
              height={18}
              width={18}
              alt="logo react"
            />
            <div className="text-lg text-gray-50">Git</div>
          </div>
          <div className="mx-auto my-0 flex gap-1">
            <img
              src={github}
              className="whiteSvg"
              height={18}
              width={18}
              alt="logo react"
            />
            <div className="text-lg text-gray-50">Github</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsIn4Column;
