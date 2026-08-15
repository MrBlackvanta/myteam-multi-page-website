import { FacebookIcon, PinterestIcon, TwitterIcon } from "@/components/icons";
import type { NavLink, SocialLink } from "./types";

export const siteUrl = "https://myteam-multi-page-website.abdelrhman-ahmed8881.workers.dev";

export const routes = ["/", "/about", "/contact"];

export const navLinks: NavLink[] = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "Pinterest", href: "#", icon: PinterestIcon },
  { label: "Twitter", href: "#", icon: TwitterIcon },
];

export const addressLines = [
  "987  Hillcrest Lane",
  "Irvine, CA",
  "California 92714",
  "Call Us : 949-833-7432",
];

export const copyright = "Copyright 2020. All Rights Reserved";
