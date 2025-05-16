import logo from "../assets/logosamux.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderText = styled.div`
  padding: 8px 28px 8px;
  justify-content: space-between;
  height: 60px;
`;

const HeaderRightDiv = styled.div`
  gap: 16px;
`;

function Header() {
  return (
    <div
      id="header"
      className="top-position fixed top-0 z-40 flex w-full items-center justify-center"
    >
      <HeaderText className="z-40 flex w-full max-w-[1300px] items-center max-sm:h-[48px] max-sm:gap-[16px] max-sm:px-[12px] max-sm:py-[7px]">
        <Link className="focusNotVisible flex items-center gap-2" to="/">
          <img
            src={logo}
            className="whiteSvg"
            height={18}
            width={18}
            alt="logo SamUX"
          />
          <div className="font-poppins text-[1rem] font-semibold text-white">
            SamDev
          </div>
        </Link>
        <HeaderRightDiv className="flex font-poppins max-sm:gap-[6px]">
          <a
            id="projectLink"
            href="#Projects"
            className="rounded-lg px-1 py-1 text-[16px] font-[500] text-blue-50 hover:cursor-pointer"
          >
            Projets
          </a>
          <a
            id="skillsLink"
            href="#Skills"
            className="rounded-lg px-1 py-1 text-[16px] font-[500] text-blue-50 hover:cursor-pointer"
          >
            Compétences
          </a>
        </HeaderRightDiv>
      </HeaderText>
    </div>
  );
}

export default Header;
