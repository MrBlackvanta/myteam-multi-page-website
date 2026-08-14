"use client";

import { navLinks } from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksVariant = "header" | "footer" | "menu";

type Variant = {
  landmark: string;
  nav?: string;
  list: string;
  link: string;
};

const variants: Record<NavLinksVariant, Variant> = {
  header: {
    landmark: "Main",
    nav: "ml-12 hidden md:block xl:ml-20",
    list: "flex gap-10",
    link: "v-link text-lead",
  },
  footer: {
    landmark: "Footer",
    list: "flex gap-6 xl:gap-10",
    link: "v-link text-body xl:text-lead",
  },
  menu: {
    landmark: "Main",
    list: "flex flex-col gap-6",
    link: "v-link-menu text-lead",
  },
};

type NavLinksProps = {
  variant: NavLinksVariant;
  onNavigate?: () => void;
};

export default function NavLinks({ variant, onNavigate }: NavLinksProps) {
  const pathname = usePathname();
  const { landmark, nav, list, link } = variants[variant];

  return (
    <nav aria-label={landmark} className={nav}>
      <ul className={list}>
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={onNavigate}
              aria-current={pathname === href ? "page" : undefined}
              className={cn("inline-block", link)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
