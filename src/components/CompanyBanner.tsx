import workedForCola from "../assets/WorkedForCola.png";
import workedForDirips from "../assets/WorkedForDirips.svg";
import workedForFinestack from "../assets/WorkedForFinestack.svg";

export default function CompanyBanner() {
  return (
    <section className="mx-auto -mt-10 max-w-6xl px-6 pb-6 max-[650px]:-mt-6 max-[650px]:px-[14px]">
      <div className="relative mx-auto flex max-w-[750px] flex-col items-center justify-center rounded-2xl px-6 py-5">
        {/* absolute left-5 top-4 */}
        <p className=" text-[10px] font-medium uppercase tracking-widest text-slate-500">
          Collaboration avec
        </p>
        <div className="relative right-[7px] flex flex-wrap items-center justify-center gap-11 pt-6 max-[650px]:gap-7 max-[450px]:right-0 max-[450px]:gap-5">
          <img
            src={workedForDirips}
            alt="Dirips"
            className="saturate-125 relative top-[5px] h-8 w-[140px] object-contain max-[450px]:top-0 max-[450px]:h-6 max-[450px]:w-[100px]"
            loading="lazy"
          />
          <img
            src={workedForFinestack}
            alt="Finestack"
            className="saturate-125 h-9 w-[270px] object-contain max-[650px]:w-[200px] max-[450px]:h-7 max-[450px]:w-[160px]"
            loading="lazy"
          />
          <img
            src={workedForCola}
            alt="Cola"
            className="saturate-125 h-8 w-[120px] object-contain max-[450px]:h-6 max-[450px]:w-[90px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
