import avatarAden from "@/assets/images/avatar-aden.webp";
import avatarChristian from "@/assets/images/avatar-christian.webp";
import avatarCruz from "@/assets/images/avatar-cruz.webp";
import avatarDrake from "@/assets/images/avatar-drake.webp";
import avatarGriffin from "@/assets/images/avatar-griffin.webp";
import avatarNikita from "@/assets/images/avatar-nikita.webp";
import type { Director } from "./types";

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
