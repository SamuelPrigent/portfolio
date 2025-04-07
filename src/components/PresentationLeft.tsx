// import underline from "../assets/underline.svg";
import linkedin from "../assets/linkedInRound.svg";
import github from "../assets/githubwhite.svg";
import mail from "../assets/mail2.svg";
import download from "../assets/download.svg";
import { Link } from "react-router-dom";

export default function PresentationLeft() {
  return (
    <div className="presentationContainerLeft relative my-auto flex flex-col rounded-lg pt-[70px] text-start font-bold max-lg:pt-[50px]">
      <div className="bigRadiantBackground"></div>
      <div
        id="name"
        className="gradientText z-10 mb-[5px] text-[55px] leading-tight max-lg:text-center max-lg:text-[50px] max-md:text-[45px] max-sm:text-[40px]"
      >
        Samuel Prigent
      </div>
      <div
        id="developpeur"
        className="specialFont z-10 text-[90px] font-semibold leading-tight text-white max-lg:text-center max-lg:text-[80px] max-md:text-[72px] max-sm:text-[62px]"
      >
        Developpeur
      </div>
      <div className="specialFont z-10 text-[90px] font-semibold leading-tight text-white max-lg:text-center max-lg:text-[80px] max-md:text-[72px] max-sm:text-[62px]">
        Fullstack.
      </div>
      <div className="linkPadding justify-left max-lg:m-[30px auto] z-10 mb-2 mt-[20px] flex w-fit flex-wrap items-center gap-[16px] gap-y-3 pl-1 text-[15px] max-lg:mx-[auto] max-lg:justify-center max-lg:px-[16px] max-md:my-[20px] max-md:grid max-md:gap-[30px]">
        {/* New */}
        <Link
          className="iconSocialPresentationDL flex items-center justify-center gap-2 rounded-full font-semibold"
          to="/cv"
        >
          <div>Download CV</div>
          <img src={download} alt="icône de téléchargement" />
        </Link>
        <div className="flex gap-[16px] gap-y-3 max-md:m-auto">
          <a
            className="iconSocialPresentation flex items-center justify-center gap-2 rounded-full font-semibold"
            target="_blank"
            href="https://www.linkedin.com/in/samuel-prigent/"
          >
            <img src={linkedin} height={34} width={34} alt="logo linkedin" />
          </a>
          <a
            className="iconSocialPresentation flex items-center justify-center gap-2 rounded-full font-semibold"
            target="_blank"
            href="https://github.com/SamuelPrigent?tab=repositories"
          >
            <img src={github} height={34} width={34} alt="logo linkedin" />
          </a>
          <a
            //   className="m-auto"
            className="iconSocialPresentationMail iconSocialPresentation flex items-center justify-center gap-2 rounded-full font-semibold"
            target="_blank"
            href="mailto:samuel.prigent@yahoo.fr"
          >
            <img
              className="invert"
              src={mail}
              height={25}
              width={25}
              alt="logo linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
