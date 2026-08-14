import avatarAden from "@/assets/images/avatar-aden.webp";
import avatarChristian from "@/assets/images/avatar-christian.webp";
import avatarCruz from "@/assets/images/avatar-cruz.webp";
import avatarDrake from "@/assets/images/avatar-drake.webp";
import avatarGriffin from "@/assets/images/avatar-griffin.webp";
import avatarNikita from "@/assets/images/avatar-nikita.webp";
import logoGadgetsNow from "@/assets/images/logo-gadgets-now.webp";
import logoJakartaPost from "@/assets/images/logo-jakarta-post.webp";
import logoTechRadar from "@/assets/images/logo-tech-radar.webp";
import logoTheGuardian from "@/assets/images/logo-the-guardian.webp";
import logoTheVerge from "@/assets/images/logo-the-verge.webp";
import type { Client, Director } from "./types";

export const directors: Director[] = [
  {
    name: "Nikita Marks",
    role: "Founder & CEO",
    quote:
      "“It always amazes me how much talent there is in every corner of the globe.”",
    avatar: avatarNikita,
  },
  {
    name: "Cristian Duncan",
    role: "Co-founder & COO",
    quote:
      "“Distributed teams required unique processes. You need to approach work in a new way.”",
    avatar: avatarChristian,
  },
  {
    name: "Cruz Hamer",
    role: "Co-founder & CTO",
    quote:
      "“Technology is at the forefront of enabling distributed teams. That’s where we come in.”",
    avatar: avatarCruz,
  },
  {
    name: "Drake Heaton",
    role: "Business Development Lead",
    quote:
      "“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”",
    avatar: avatarDrake,
  },
  {
    name: "Griffin Wise",
    role: "Lead Marketing",
    quote:
      "“Unique perspectives shape unique products, which is what you need to survive these days.”",
    avatar: avatarGriffin,
  },
  {
    name: "Aden Allan",
    role: "Account Manager",
    quote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    avatar: avatarAden,
  },
];

export const clients: Client[] = [
  {
    name: "The Verge",
    logo: logoTheVerge,
    width: "w-36.75 md:w-25.75 xl:w-41.25",
  },
  {
    name: "Jakarta Post",
    logo: logoJakartaPost,
    width: "w-40.5 md:w-28.5 xl:w-46",
  },
  {
    name: "The Guardian",
    logo: logoTheGuardian,
    width: "w-39.75 md:w-28 xl:w-45",
  },
  {
    name: "Tech Radar",
    logo: logoTechRadar,
    width: "w-36.75 md:w-25.75 xl:w-41.25",
  },
  {
    name: "Gadgets Now",
    logo: logoGadgetsNow,
    width: "w-21.75 md:w-15.25 xl:w-24.5",
  },
];
