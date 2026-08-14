import { features } from "@/data";

export default function Features() {
  return (
    <section
      aria-labelledby="features-heading"
      className="relative overflow-x-clip bg-sacramento-state-green py-16 md:py-25 xl:py-35"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 -right-25 h-61 w-50 bg-[url(/bg-pattern-home-3.svg)] xl:top-auto xl:bottom-0"
      />

      <div className="relative v-container">
        <div className="xl:grid xl:grid-cols-[27.8125rem_1fr] xl:gap-x-31.25">
          <div>
            <span className="block h-1 w-12.5 bg-light-coral" />
            <h2
              id="features-heading"
              className="mt-8 max-w-60 text-h2-sm font-bold md:max-w-111.25 xl:mt-13.5 xl:text-h2"
            >
              Build &amp; manage distributed teams like no one else.
            </h2>
          </div>

          <ul className="mt-14 flex flex-col gap-12 md:mt-16 md:gap-8 xl:mt-14.5">
            {features.map(({ title, body, icon: Icon }) => (
              <li
                key={title}
                className="flex flex-col items-center text-center md:grid md:grid-cols-[4.5rem_1fr] md:items-start md:gap-x-5.75 md:text-left"
              >
                <Icon className="size-18" />
                <div className="mt-4 md:mt-0">
                  <h3 className="text-lead font-bold text-light-coral">
                    {title}
                  </h3>
                  <p className="mt-2 text-body text-white/80 md:mt-4">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
