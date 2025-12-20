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

export type Skill = {
  label: string;
  icon: string;
  docUrl: string;
};

export type SoftSkillWord = {
  text: string;
  className: string;
};

export type Layout = "desktop" | "tablet" | "mobile";

export type Experience = {
  id: string;
  startDate: string; // Format: YYYY-MM
  endDate: string | null; // Format: YYYY-MM or null if current position
  title: string;
  company: string;
  contract: string;
  missions: string[];
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
