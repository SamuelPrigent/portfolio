export type NavItem = {
  label: string;
  target: string;
  Icon: (props: { className?: string }) => JSX.Element;
};

export type SocialLink = {
  href: string;
  label: string;
  Icon: (props: { className?: string }) => JSX.Element;
};

export type SkillSectionItem = { label: string; icon: string; level: number };

export type SkillSection = {
  title: string;
  border: string;
  items: SkillSectionItem[];
};

export type SoftSkillWord = {
  text: string;
  className: string;
};

export type Layout = "desktop" | "tablet" | "mobile";

export type Experience = {
  id: string;
  period: string;
  periodShort?: string;
  duration: string;
  title: string;
  company: string;
  contract: string;
  description: string;
  environment: string[];
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
  link: string;
  tags: string[];
};

export type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactStatus = "idle" | "sending" | "success" | "error";
