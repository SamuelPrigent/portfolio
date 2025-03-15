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
      <div className="right-[30px] top-[5px] z-30 h-3 w-auto rounded-xl border-2 border-black bg-[#000000a9F] p-2 text-black opacity-100 group-hover:opacity-100 group-focus:opacity-100 ">
        Link
      </div>
      <div className="absolute inset-0 h-full w-full rounded-xl">
        <img
          className="brightness-85 absolute inset-0 m-auto h-[98%] w-[99%] rounded-[10px] object-cover object-top"
          src={src}
          alt={`Image de ${src}`}
        />
      </div>
      <div className="transparentBackground absolute inset-0 flex h-full w-full flex-col justify-start gap-1 rounded-[11px] p-6 transition-opacity  group-hover:opacity-0 group-focus:opacity-0">
        <div
          aria-hidden="false"
          className="titleText flex h-[40%] items-center justify-center text-xl font-bold"
        >
          {title}
        </div>
        <div
          aria-hidden="false"
          className="text-normal line-clamp-[5] text-gray-300 max-[1020px]:line-clamp-3 max-[745px]:line-clamp-2"
        >
          {desc}
        </div>
      </div>
    </a>
  );
};

export default ProjectElement;
