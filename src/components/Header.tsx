import leaf from "../assets/leaf.svg";

function Header() {
  return (
    <div
      id="header"
      className="top-position fixed top-0 z-40 flex w-full items-center justify-center"
    >
      <div className="header z-40 flex w-full max-w-[1300px] items-center max-sm:h-[48px] max-sm:gap-[16px] max-sm:px-[12px] max-sm:py-[7px]">
        <div className="flex items-center gap-2">
          <img src={leaf} height={22} width={22} alt="logo feuille" />
          <div className="gradientText text-lg font-semibold">SamUX</div>
        </div>
        <div className="headerRightDiv flex max-sm:gap-[6px]">
          <a
            href="#Projects"
            className="rounded-lg px-1 py-1 text-[15px] font-[500] text-green-50 hover:cursor-pointer"
          >
            Mes projets
          </a>
          <a
            href="#Skills"
            className="rounded-lg px-1 py-1 text-[15px] font-[500] text-green-50 hover:cursor-pointer"
          >
            Technologies
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
