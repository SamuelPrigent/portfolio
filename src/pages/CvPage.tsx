import { Link } from "react-router-dom";
import pdfUrl from "../assets/CV.pdf";
import arrowBack from "../assets/arrowBack.svg";

export default function CvPage() {
  return (
    <div className="min-h-screen w-full bg-[#fdf9f3] text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-start px-5 py-5 lg:gap-[1rem]">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          aria-label="Retour à l'accueil"
          className="cv-back-pill"
        >
          <img src={arrowBack} alt="" className="invert" />
        </Link>
        <div className="relative flex-1 overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_28px_56px_-46px_rgba(15,23,42,0.55)]">
          <iframe
            src={pdfUrl}
            title="CV Samuel Prigent"
            className="h-[93vh] w-full"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>
  );
}
