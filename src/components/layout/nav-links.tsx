"use client";

import { navLinks } from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksVariant = "header" | "footer" | "menu";

const listStyles: Record<NavLinksVariant, string> = {
  header: "ml-12 hidden gap-10 md:flex xl:ml-20",
  footer: "flex gap-6 xl:gap-10",
  menu: "flex flex-col gap-6",
};

const linkStyles: Record<NavLinksVariant, string> = {
  header: "v-link text-lead",
  footer: "v-link text-body xl:text-lead",
  menu: "v-link-menu text-lead",
};

type NavLinksProps = {
  variant: NavLinksVariant;
  onNavigate?: () => void;
};

export default function NavLinks({ variant, onNavigate }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={listStyles[variant]}>
      {navLinks.map(({ label, href }) => (
        <li key={href}>
          <Link
            href={href}
            onClick={onNavigate}
            aria-current={pathname === href ? "page" : undefined}
            className={cn("inline-block", linkStyles[variant])}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
