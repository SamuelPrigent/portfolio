import pdfUrl from "../../public/CV.pdf";

const CvPage = () => {
  return (
    <div className="container mx-auto mt-[70px] h-screen px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-blue-50">Curriculum Vitae</h1>
      <div className="h-[80vh] w-full overflow-hidden rounded-xl bg-[#161838]">
        <iframe
          src={pdfUrl}
          className="relative z-40 h-full w-full"
          style={{ border: "none" }}
          title="CV PDF"
        />
      </div>
    </div>
  );
};

export default CvPage;
