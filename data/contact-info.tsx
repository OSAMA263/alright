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

export const CONTACT_DETAILS: Types[] = [
  {
    Icon: BiLogoGithub,
    url: "https://github.com/OSAMA263",
    label: "GitHub",
  },
  {
    Icon: BiLogoLinkedin,
    url: "https://www.linkedin.com/in/osama00/",
    label: "LinkedIn",
  },
  {
    Icon: BiLogoGmail,
    url: "mailto:osamaelseify2@gmail.com",
    label: "Gmail",
  },
  {
    Icon: BiLogoWhatsapp,
    url: "https://wa.me/201121451306",
    label: "WhatsApp",
  },
];
