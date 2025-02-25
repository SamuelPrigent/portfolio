// components
import ProjectElement from "./ProjectElement";
// assets
import fifo from "../assets/preview-fifo.png";
import kasa from "../assets/preview-kasa.png";
import lespetitsplats from "../assets/preview-lespetitsplats.png";

function ProjectList() {
  return (
    <>
      <ProjectElement
        src={fifo}
        title="FIFO"
        desc="Conception d'un système de file d’attente prioritaire (FIFO : First
            In First Out), permettant l’ajout d’actions variées, consommant
            différents types de crédits."
        link="https://github.com/SamuelPrigent/FIFO"
      />
      <ProjectElement
        src={kasa}
        title="Kasa"
        desc="Développement front de l’application avec une intégration
        responsive, la mise en place de React Router permettant une
        navigation fluide, accompagné d'une interface intuitive."
        link="https://samuelprigent.github.io/Kasa/"
      />
      <ProjectElement
        src={lespetitsplats}
        title="Les Petits Plats"
        desc="Réalisation d’un algorithme de recherche de recettes de cuisines.
        Gestion de différents filtres successifs (texte simple, ingrédients,
        appareils, ustensiles)."
        link="https://samuelprigent.github.io/LesPetitsPlats/"
      />
    </>
  );
}

export default ProjectList;
