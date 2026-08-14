import { QuotesIcon } from "@/components/icons";
import { testimonials } from "@/data";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative bg-deep-jungle-green pt-35 pb-41 md:pt-25 md:pb-25 xl:pt-35 xl:pb-37.75"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-36.75 h-25 w-36.75 bg-[url(/bg-pattern-home-4-about-3.svg)]"
      />

      <div className="relative v-container">
        <h2
          id="testimonials-heading"
          className="mx-auto text-center text-h2-sm font-bold xl:max-w-233 xl:text-h2"
        >
          Delivering real results for top companies. Some of our{" "}
          <span className="whitespace-nowrap text-rapture-blue">
            success stories.
          </span>
        </h2>

        <ul className="mt-12 flex flex-col gap-12 xl:mt-14 xl:grid xl:grid-cols-3 xl:gap-x-7.5">
          {testimonials.map(({ quote, name, role, avatar }) => (
            <li key={name}>
              <figure className="relative isolate pt-9 text-center">
                <QuotesIcon className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 text-police-blue" />
                <blockquote className="text-body">
                  <p>{quote}</p>
                </blockquote>
                <figcaption className="mt-4 xl:mt-6">
                  <p className="text-lead font-bold text-rapture-blue">
                    {name}
                  </p>
                  <p className="mt-0.5 text-meta font-medium italic">{role}</p>
                  <Image
                    src={avatar}
                    alt=""
                    width={62}
                    height={62}
                    className="mx-auto mt-4 rounded-full ring-2 ring-avatar-ring xl:mt-8"
                  />
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
