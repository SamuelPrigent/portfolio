export interface ProjectElementProps {
  src: string;
  title: string;
  desc: string;
  link: string;
}

const ProjectElement: React.FC<ProjectElementProps> = ({
  src,
  title,
  desc,
  link,
}) => {
  return (
    <a
      target="_blank"
      href={link}
      className="group relative overflow-hidden rounded-xl text-start hover:cursor-pointer"
    >
      <div className="absolute inset-0 h-full w-full rounded-xl">
        <img
          className="brightness-85 absolute inset-0 m-auto h-[98%] w-[99%] rounded-[10px] object-cover object-top"
          src={src}
          alt={`Image de ${src}`}
        />
      </div>
      <div className="transparentBackground absolute inset-0 flex h-full w-full flex-col gap-1 rounded-[11px] p-6 backdrop-blur-[2.5px] transition-opacity group-hover:opacity-0 group-focus:opacity-0">
        <div aria-hidden="false" className="titleText text-xl font-bold ">
          {title}
        </div>
        <div
          aria-hidden="false"
          className="text-normal line-clamp-[7] text-gray-300 max-[1020px]:line-clamp-3"
        >
          {desc}
        </div>
      </div>
    </a>
  );
};

export default ProjectElement;
