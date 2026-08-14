import CtaBand from "@/components/cta-band";
import { Directors, Hero } from "@/views/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "myteam builds dynamic teams from a global network of passionate professionals. Meet the directors behind the company.",
};

export default function About() {
  return (
    <>
      <Hero />
      <Directors />
      <CtaBand />
    </>
  );
}
