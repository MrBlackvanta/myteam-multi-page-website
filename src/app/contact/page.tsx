import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <section className="bg-midnight-green pt-20 pb-28">
      <div className="v-container">
        <h1 className="text-h1-sm md:text-h1-md font-bold">Contact</h1>
      </div>
    </section>
  );
}
