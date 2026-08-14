import type { StaticImageData } from "next/image";
import type { ComponentType, SVGProps } from "react";

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = NavLink & {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export type Feature = {
  title: string;
  body: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: StaticImageData;
};
