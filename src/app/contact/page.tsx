import { pageMetadata } from "@/lib/metadata";
import { Hero } from "@/views/contact";

export const metadata = pageMetadata({
  title: "Contact",
  shareTitle: "Contact | myteam",
  description:
    "Talk to myteam about the quality of our talent network, how our software works, and the way we help companies drive innovation.",
  path: "/contact",
});

export default function Contact() {
  return <Hero />;
}
