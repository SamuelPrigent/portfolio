import linkedIn from "../assets/linkedInWhite.svg";
import github from "../assets/github.svg";
import mail from "../assets/mail.svg";
import logo from "../assets/logosamux.svg";

function Footer() {
  return (
    <div className="mx-auto mb-[2px] mt-[30px] box-border flex h-[90px] w-full max-w-[1300px] items-center justify-between px-[28px] text-sm text-[#ebebf599]">
      <div className="flex gap-6">
        <a href="https://www.linkedin.com/in/samuel-prigent/" target="_blank">
          <img
            src={linkedIn}
            alt="logo linkedin"
            className="aspect-square h-[22px]"
          />
        </a>
        <a
          target="_blank"
          href="https://github.com/SamuelPrigent?tab=repositories"
        >
          <img
            src={github}
            alt="logo github"
            className="whiteSvg aspect-square h-[22px]"
          />
        </a>
        <a href="mailto:samuel.prigent@yahoo.fr">
          <img
            src={mail}
            alt="logo mail"
            className="whiteSvg aspect-square h-[22px]"
          />
        </a>
      </div>
      <div className="flex items-center justify-center gap-[10px]">
        <img src={logo} alt="logo SamUX" className="whiteSvg h-[18px]" />
        <div className="text-bold text-[1.1rem] font-semibold text-white">
          SamUX
        </div>
      </div>
      <div className="text-[0.9rem] text-white">Copyright ©SamUX 2025</div>
    </div>
  );
}

export default Footer;
