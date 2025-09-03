// components
import ProjectElement from "./ProjectElement";
// assets
import fifo from "../assets/preview-fifo.png";
import kasa from "../assets/preview-kasa.png";
import lespetitsplats from "../assets/preview-lespetitsplats.png";
import mdd from "../assets/preview-mdd.png";
import rentals from "../assets/preview-rentals.png";
// import groupomania from "../assets/preview-groupomania.png";

function ProjectList() {
  return (
    <>
      <ProjectElement
        src={fifo}
        title="FIFO"
        desc="Système de file d’attente FIFO : First
            In First Out. Ajout en file d'actions consomment
            différents type de crédits."
        link="https://github.com/SamuelPrigent/FIFO"
        techNames={["React", "Express"]}
        techBadgeClasses={["lightblueBadge", "yellowgreenBadge"]}
        // techBadgeClasses={["whiteBadge", "whiteBadge"]}
      />
      <ProjectElement
        src={mdd}
        title="MDD"
        desc="App Fullstack Angular & Spring boot : suivez des thèmes et consultez les articles associés aux thèmes suivi."
        link="https://github.com/SamuelPrigent/MondeDeDev"
        techNames={["Angular", "Springboot"]}
        techBadgeClasses={["purpleBadge", "greenBadge"]}
        // techBadgeClasses={["whiteBadge", "whiteBadge"]}
      />
      <ProjectElement
        src={rentals}
        title="Rentals"
        desc="API REST authentification avec JWT pour la gestion de locations. Cloudinary pour le stockage des images."
        link="https://github.com/SamuelPrigent/Rentals-Backend"
        techNames={["Angular", "Springboot"]}
        techBadgeClasses={["purpleBadge", "greenBadge"]}
        // techBadgeClasses={["whiteBadge", "whiteBadge"]}
      />
      <ProjectElement
        src={lespetitsplats}
        title="Les Petits Plats"
        desc="Algorithme de recherche de recettes de cuisines avec filtres successifs (texte, ingrédients,
        appareils, ustensiles)."
        link="https://samuelprigent.github.io/LesPetitsPlats/"
        techNames={["Javascript"]}
        techBadgeClasses={["darkyellowBadge"]}
        // techBadgeClasses={["whiteBadge"]}
      />
      <ProjectElement
        src={kasa}
        title="Kasa"
        desc="Développement Front d'une SPA desktop et mobile avec React Router avec une
        navigation fluide."
        techNames={["React", "Design"]}
        techBadgeClasses={["lightblueBadge", "bluepurpleBadge"]}
        // techBadgeClasses={["whiteBadge", "whiteBadge"]}
        link="https://samuelprigent.github.io/Kasa/"
      />
      {/* <ProjectElement
        src={groupomania}
        title="Groupomania"
        desc="Blog de création d'articles avec authentification JWT permettant de publier et commenter des posts entre utilisateurs."
        techNames={["VueJS", "Express"]}
        techBadgeClasses={["greenBadge", "whiteBadge"]}
        link="https://samuelprigent.github.io/Kasa/"
      /> */}
    </>
  );
}

export default ProjectList;
