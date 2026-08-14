import type { ComponentType, SVGProps } from "react";

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = NavLink & {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};
