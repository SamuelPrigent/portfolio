import react from "../assets/logo-react.svg";
import express from "../assets/logo-express.svg";
import tailwind from "../assets/logo-tailwindcss.svg";
import composant from "../assets/composant.svg";

export default function PresentationRight() {
  return (
    <div className="composantContainer relative top-[34px] m-auto flex aspect-square items-center justify-center text-center max-lg:h-[290px] max-lg:min-w-[290px] max-sm:h-[250px] max-sm:min-w-[250px]">
      <div className="gradientBorder absolute left-0 right-0 h-full w-full rounded-full"></div>
      <div className="textureBackground z-20"></div>
      <div className="radiantBackground z-10"> </div>
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
        width={170}
        className="z-30 aspect-square select-none max-lg:w-[160px] max-sm:w-[130px]"
      />
    </div>
  );
}
