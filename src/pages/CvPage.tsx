import type { SVGProps } from "react";
import { Link } from "react-router-dom";
import pdfUrl from "../assets/CV.pdf";

function ArrowBackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

export default function CvPage() {
  return (
    <div className="min-h-screen w-full bg-[#fdf9f3] text-slate-900 transition-colors duration-300 ease-out ">
      <div className="mx-auto min-h-screen w-full max-w-6xl px-5 py-5">
        <div className="cv-content-wrapper">
          <div className="cv-back-actions">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              aria-label="Retour à l'accueil"
              className="cv-back-pill"
            >
              <ArrowBackIcon className="cv-back-pill__icon" />
            </Link>
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              aria-label="Retour à l'accueil"
              className="cv-back-button"
            >
              Retour
            </Link>
          </div>
          <div className="cv-preview relative flex-1 overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_28px_56px_-46px_rgba(15,23,42,0.55)] ">
            <iframe
              src={pdfUrl}
              title="CV Samuel Prigent"
              className="cv-preview-frame"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
