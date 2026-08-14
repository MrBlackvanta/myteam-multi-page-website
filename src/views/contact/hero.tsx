import { topics } from "@/data";
import ContactForm from "./contact-form";

export default function Hero() {
  return (
    <section className="relative overflow-clip bg-midnight-green pt-20 pb-22 md:pt-28 md:pb-28 xl:pt-30 xl:pb-30">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-26 left-25 hidden size-50 bg-[url(/bg-pattern-about-2-contact-1.svg)] md:block xl:top-31"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-25 -bottom-28 h-56.25 w-50.25 bg-[url(/bg-pattern-contact-2.svg)] md:-bottom-1 xl:bottom-0"
      />

      <div className="relative v-container">
        <div className="xl:grid xl:grid-cols-2 xl:gap-x-7.5">
          <div>
            <h1 className="text-center text-h1-sm font-bold md:text-h1-md xl:text-left xl:leading-25">
              Contact
            </h1>
            <h2 className="mt-4 text-center text-h2-sm leading-12 font-bold text-light-coral md:mt-6 xl:mt-4 xl:text-left">
              Ask us about
            </h2>
            <ul className="mt-10 flex flex-col gap-6 md:mx-auto md:mt-6 md:max-w-128.75 md:gap-2 xl:mt-8 xl:max-w-none">
              {topics.map(({ title, icon: Icon }) => (
                <li key={title} className="flex items-center gap-x-5.75">
                  <Icon className="size-18 shrink-0" />
                  <span className="text-lead font-bold">{title}</span>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm className="mt-14 md:mx-auto md:mt-16 md:max-w-135 xl:mx-0 xl:mt-0 xl:max-w-none" />
        </div>
      </div>
    </section>
  );
}
