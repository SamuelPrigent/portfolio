
const CvPage = () => {
  // Vous pouvez remplacer ce chemin par l'emplacement réel de votre PDF
  const pdfUrl = 'samuelprigent/src/assets/cv.pdf'; // À remplacer par votre PDF réel

  return (
    <div className="container mx-auto mt-[70px] py-8 px-4 h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-50">Curriculum Vitae</h1>
      <div className="w-full h-[80vh] bg-[#161838] rounded-xl overflow-hidden">
        {/* Le iframe affichera votre PDF */}
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
