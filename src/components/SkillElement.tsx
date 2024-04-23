export interface SkillElementProps {
  src: string;
  text: string;
}

const SkillElement: React.FC<SkillElementProps> = ({ src, text }) => {
  return (
    <>
      <div className="mx-auto my-0 flex gap-1">
        <img
          src={src}
          className="whiteSvg"
          height={18}
          width={18}
          alt="logo react"
        />
        <div className="text-lg text-gray-50">{text}</div>
      </div>
    </>
  );
};

export default SkillElement;
