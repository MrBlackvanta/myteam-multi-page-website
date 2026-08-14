import { directors } from "@/data";
import DirectorCard from "./director-card";

export default function Directors() {
  return (
    <section
      aria-labelledby="directors-heading"
      className="relative overflow-clip bg-deep-jungle-green py-22 md:py-25 xl:py-35"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-25 left-25 size-50 bg-[url(/bg-pattern-about-2-contact-1.svg)] md:top-0"
      />

      <div className="relative v-container">
        <h2
          id="directors-heading"
          className="text-center text-h2-sm font-bold xl:text-h2"
        >
          Meet the directors
        </h2>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 md:gap-x-2.75 md:gap-y-12 xl:mt-16 xl:grid-cols-3 xl:gap-x-7.5">
          {directors.map((director) => (
            <li key={director.name}>
              <DirectorCard {...director} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
