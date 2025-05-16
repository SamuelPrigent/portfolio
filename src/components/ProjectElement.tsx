import linkOut from "../assets/linkOut.svg";

export interface ProjectElementProps {
  src: string;
  title: string;
  desc: string;
  link: string;
  techNames?: string[];
  techBadgeClasses?: string[];
}

const ProjectElement: React.FC<ProjectElementProps> = ({
  src,
  title,
  desc,
  link,
  techNames = [],
  techBadgeClasses = [],
}) => {
  return (
    <a
      target="_blank"
      href={link}
      className="group relative h-[250px] overflow-hidden rounded-xl text-start hover:cursor-pointer"
    >
      {/* Icône de lien externe avec animation */}
      <div className="absolute right-[20px] top-[10px] z-40 overflow-hidden rounded-lg bg-black/80 p-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <img
          src={linkOut}
          alt="external link"
          className="h-[17px] w-[17px] translate-y-full transform invert transition-transform duration-300 group-hover:translate-y-0"
        />
      </div>

      {/* Image de fond */}
      <div className="absolute inset-0 h-full w-full rounded-xl">
        <img
          className="brightness-85 absolute inset-0 m-auto h-[98%] w-[99%] rounded-[10px] object-cover object-top"
          src={src}
          alt={`Image de ${src}`}
        />
      </div>

      {/* Background transparent qui disparaît au hover */}
      <div className="transparentBackground absolute inset-0 flex h-full w-full flex-col justify-between rounded-[11px] p-6 transition-all duration-200 ease-out group-hover:opacity-0 group-focus:opacity-0">
        <div className="top-section">
          <div
            aria-hidden="false"
            className="titleText mb-2 flex min-h-[45px] items-center justify-center text-xl font-bold"
          >
            {title}
          </div>
          <div
            aria-hidden="false"
            className="line-clamp-[5] text-[15px] text-gray-300 max-[1020px]:line-clamp-5 max-[745px]:line-clamp-5"
          >
            {desc}
          </div>
        </div>
        <div className="bottom-section mb-0">
          <div className="flex gap-2">
            {techNames.map((tech, index) => (
              <div
                key={index}
                className={`flex w-fit items-center justify-center rounded-md px-2 py-1 text-sm ${techBadgeClasses[index] || "bg-blue-900 text-blue-400"}`}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectElement;
