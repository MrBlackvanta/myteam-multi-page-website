import { Hero } from "@/views/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to myteam about the quality of our talent network, how our software works, and the way we help companies drive innovation.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return <Hero />;
}
