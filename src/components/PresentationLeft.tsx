import underline from "../assets/underline.svg";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.svg";
import mail from "../assets/mail.svg";

export default function PresentationLeft() {
  return (
    <div className="presentationContainerLeft relative my-auto flex flex-col rounded-lg pt-[70px] text-start font-bold max-lg:pt-[50px] ">
      <img
        className="presentationUnderline absolute left-[280px] top-[135px] rotate-[-2.5deg] max-lg:left-[332px] max-lg:top-[111px] max-lg:w-[173px] max-md:left-[58%] max-md:top-[105px] max-md:w-[170px] max-sm:left-[58%] max-sm:top-[101px] max-sm:h-[13px] max-sm:w-[144px]"
        src={underline}
        height={30}
        width={187}
        alt="img underline"
      />
      <div
        id="name"
        className="gradientText z-10 mb-[5px] text-[55px] leading-tight max-lg:text-center max-lg:text-[50px] max-md:text-[45px] max-sm:text-[40px]"
      >
        Samuel Prigent
      </div>
      <div
        id="developpeur"
        className="z-10 font-poppins text-[75px] font-semibold leading-tight text-white max-lg:text-center max-lg:text-[70px] max-md:text-[62px] max-sm:text-[55px]"
      >
        Developpeur
      </div>
      <div
        id="fullstack"
        className="voidTextWithBordure z-10 font-poppins text-[100px] font-semibold leading-none max-lg:text-center max-lg:text-[90px] max-md:text-[80px] max-sm:text-[65px]"
      >
        Fullstack
      </div>
      <div className="linkPadding justify-left mb-2 mt-[20px] flex flex-wrap gap-2 gap-y-3 text-[15px] max-lg:justify-center max-lg:px-[16px]">
        <a
          className="yellowButton flex items-center justify-center gap-2 rounded-full font-semibold"
          target="_blank"
          href="https://www.linkedin.com/in/samuel-prigent/"
        >
          <img src={linkedin} height={17} width={17} alt="Code" />
          LinkedIn
        </a>
        <a
          className="grayButton flex items-center justify-center gap-2 rounded-full font-medium"
          target="_blank"
          href="https://github.com/SamuelPrigent?tab=repositories"
        >
          <img
            className="whiteSvg"
            src={github}
            height={18}
            width={18}
            alt="logo github"
          />
          Github
        </a>
        <a
          className="grayButton flex items-center justify-center gap-2 rounded-full font-medium"
          href="mailto:samuel.prigent@yahoo.fr"
        >
          <img
            className="whiteSvg"
            src={mail}
            height={18}
            width={18}
            alt="logo mail"
          />
          samuel.prigent@yahoo.fr
        </a>
      </div>
    </div>
  );
}
