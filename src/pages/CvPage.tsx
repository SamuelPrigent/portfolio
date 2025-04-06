import pdfUrl from "../../public/CV.pdf" 

const CvPage = () => {

  return (
    <div className="container mx-auto mt-[70px] py-8 px-4 h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-50">Curriculum Vitae</h1>
      <div className="w-full h-[80vh] bg-[#161838] rounded-xl overflow-hidden">
        <iframe 
          src={pdfUrl} 
          className="w-full h-full" 
          style={{border: 'none'}} 
          title="CV PDF"
        />
      </div>
    </div>
  );
};

export default CvPage;
