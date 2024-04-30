import underline from "../assets/underline.svg";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.svg";
import mail from "../assets/mail.svg";

export default function PresentationLeft() {
  return (
    <div className="presentationContainerLeft relative my-auto flex flex-col rounded-lg pt-[70px] text-start font-bold max-lg:pt-[60px] ">
      <img
        className="presentationUnderline absolute left-[200px] top-[131px] max-lg:left-[300px] max-lg:top-[122px] max-md:left-[57%] max-md:top-[117px] max-sm:left-[54%] max-sm:top-[107px] max-sm:h-[12px] lg:w-[175px]"
        src={underline}
        height={30}
        width={150}
        alt="img underline"
      />
      <div
        id="name"
        className="presentationText gradientText z-10 mb-[5px] text-5xl leading-tight max-lg:text-center max-md:text-[45px] max-sm:text-[35px]"
      >
        Samuel Prigent
      </div>
      <div
        id="developpeur"
        className="presentationText z-10 font-poppins text-[65px] font-semibold leading-tight text-white max-lg:text-center max-lg:text-[60px] max-md:text-[55px] max-sm:text-[45px]"
      >
        Developpeur
      </div>
      <div
        id="fullstack"
        className="presentationText voidTextWithBordure z-10 font-poppins text-[80px] font-semibold leading-none max-lg:text-center max-lg:text-[70px] max-md:text-[60px] max-sm:text-[50px]"
      >
        Fullstack
      </div>
      <div className="linkPadding mb-2 mt-[20px] flex flex-wrap justify-center gap-2 gap-y-3 text-[14px] max-lg:px-[16px]">
        <a
          className="yellowButton flex h-[38px] items-center justify-center gap-2 rounded-full font-semibold"
          target="_blank"
          href="https://www.linkedin.com/in/samuel-prigent/"
        >
          <img src={linkedin} height={17} width={17} alt="Code" />
          LinkedIn
        </a>
        <a
          className="grayButton flex h-[38px] items-center justify-center gap-2 rounded-full font-medium"
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
          className="grayButton flex h-[38px] items-center justify-center gap-2 rounded-full font-medium"
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
