import pdfUrl from "../assets/CV.pdf";
import back from "../assets/arrowBack.svg";
import { Link } from "react-router-dom";

const CvPage = () => {
  return (
    <>
      <div className="container relative mx-auto px-4 py-4">
        <Link
          to="/samuelprigent/"
          className="absolute left-[-45px] top-[16px] flex aspect-square h-[49px] items-center justify-center gap-2 rounded-full bg-[#32363996] p-3 transition-all hover:brightness-[1.15]"
        >
          <img src={back} className=" z-40" />
        </Link>
        <div className="relative h-[95vh] w-full overflow-hidden rounded-xl">
          <iframe
            src={pdfUrl}
            className="relative z-40 h-full w-full"
            style={{ border: "none" }}
            title="CV PDF"
          />
        </div>
      </div>
    </>
  );
};

export default CvPage;
