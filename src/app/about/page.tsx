import CtaBand from "@/components/cta-band";
import { pageMetadata } from "@/lib/metadata";
import { Clients, Directors, Hero } from "@/views/about";

export const metadata = pageMetadata({
  title: "About",
  shareTitle: "About | myteam",
  description:
    "myteam builds dynamic teams from a global network of passionate professionals. Meet the directors behind the company.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <Hero />
      <Directors />
      <Clients />
      <CtaBand />
    </>
  );
}
