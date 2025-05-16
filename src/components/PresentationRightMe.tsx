// import picOfMe from "../assets/picOfMe2.png";
import styled from "styled-components";
import picOfMe2 from "../assets/proPhoto3.jpg";

const PicContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  width: 320px;
  overflow: hidden;
  border-radius: 50%;
  z-index: 20;
  background:
    linear-gradient(#101112, #101112) padding-box,
    linear-gradient(128deg, #019eff 1.35%, #ffc401 104.47%) border-box;
  border: 8px solid transparent;
  /* border: 6.5px solid white; */
  /* border: 8.5px solid #13a2ff; */
  & > img {
    transition: all 200ms ease-out;
    /* big picture */
    position: relative;
    top: 90px;
    scale: 2;
    right: 8px;
  }

  &:hover > img {
    transition: all 200ms ease-in-out;
    transform: scale(1.04);
  }
`;

const StyledImage = styled.img`
  z-index: 30;
  user-select: none;
  width: 100%;
`;

export default function PresentationRight() {
  return (
    <div className="composantContainer relative top-[62px] m-auto flex aspect-square items-center justify-center text-center max-lg:h-[300px] max-lg:min-w-[300px] max-sm:h-[250px] max-sm:min-w-[250px]">
      <PicContainer>
        <StyledImage src={picOfMe2} alt="svg composant" />
      </PicContainer>
    </div>
  );
}
