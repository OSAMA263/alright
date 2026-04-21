import { IconType } from "react-icons";
import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoGmail,
  BiLogoWhatsapp,
} from "react-icons/bi";

type Types = {
  Icon: IconType;
  url?: string;
  mail?: string;
  label: string;
};

export const LINKS = {
  github: "https://github.com/OSAMA263",
  linkedin: "https://www.linkedin.com/in/osama00/",
  gmail: "mailto:osamaelseify2@gmail.com",
  whatsapp: "https://wa.me/201121451306",
};

export const CONTACT_DETAILS: Types[] = [
  {
    Icon: BiLogoGithub,
    url: LINKS.github,
    label: "GitHub",
  },
  {
    Icon: BiLogoLinkedin,
    url: LINKS.linkedin,
    label: "LinkedIn",
  },
  {
    Icon: BiLogoGmail,
    url: LINKS.gmail,
    label: "Gmail",
  },
  {
    Icon: BiLogoWhatsapp,
    url: LINKS.whatsapp,
    label: "WhatsApp",
  },
];
