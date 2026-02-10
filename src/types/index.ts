export type SocialLink = {
  href: string;
  label: string;
  Icon: (props: { className?: string }) => React.ReactElement;
};

export type Skill = {
  label: string;
  icon: string;
  darkIcon?: string;
  docUrl: string;
};

export type SoftSkillWord = {
  text: string;
};

export type Experience = {
  id: string;
  startDate: string;
  endDate: string | null;
  title: string;
  company: string;
  contract: string;
  logo: string;
  logoClassName?: string;
  missions: string[];
  techStack: Array<{ logo: string; darkLogo?: string; name: string }>;
};

export type Education = {
  level: string;
  title: string;
  school: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  vercelLink?: string;
  githubLink?: string;
  techStack: Array<{ logo: string; darkLogo?: string; name: string }>;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  image?: string;
};
