import linkedIn from "../assets/linkedInWhite.svg";
import github from "../assets/github.svg";
import mail from "../assets/mail2.svg";
import logo from "../assets/logoSamDev.svg";

function Footer() {
  return (
    <div className="borderTopFooter mt-2">
      <div className="mx-auto box-border flex h-[80px] w-full max-w-[1300px] items-center justify-between px-[28px] text-sm text-[#ebebf599] max-sm:h-auto max-sm:flex-col max-sm:gap-8 max-sm:pb-7 max-sm:pt-5">
        <div className="flex gap-5">
          <a
            className="rounded-full p-1"
            href="https://www.linkedin.com/in/samuel-prigent/"
            target="_blank"
          >
            <img
              src={linkedIn}
              alt="logo linkedin"
              className="aspect-square h-[22px]"
            />
          </a>
          <a
            className="rounded-full p-1"
            target="_blank"
            href="https://github.com/SamuelPrigent?tab=repositories"
          >
            <img
              src={github}
              alt="logo github"
              className="whiteSvg aspect-square h-[22px]"
            />
          </a>
          <a className="rounded-full p-1" href="mailto:samuel.prigent@yahoo.fr">
            <img
              src={mail}
              alt="logo mail"
              className=" aspect-square h-[25px]"
              // className="whiteSvg aspect-square h-[22px]"
            />
          </a>
        </div>
        <div className="flex items-center justify-center gap-[8px]">
          <img src={logo} alt="logo SamUX" className="whiteSvg h-[18px]" />
          <div className="text-bold font-poppins text-[1rem] font-semibold text-white">
            SamDev
          </div>
        </div>
        <div className="font-poppins text-[15px] text-white">
          Copyright © SamDev 2025
        </div>
      </div>
    </div>
  );
}

export default Footer;
