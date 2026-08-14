import { clients } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Clients() {
  return (
    <section
      aria-labelledby="clients-heading"
      className="relative overflow-clip bg-sacramento-state-green py-22 md:py-25 xl:py-35"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-25 -left-25 size-50 bg-[url(/bg-pattern-about-4.svg)] md:left-0 xl:top-0"
      />

      <div className="relative v-container">
        <h2
          id="clients-heading"
          className="text-center text-h2-sm font-bold xl:text-h2"
        >
          Some of our clients
        </h2>
      </div>

      <ul className="relative mx-auto mt-16 flex max-w-172.25 flex-col items-center gap-y-14 md:mt-12 md:flex-row md:justify-between xl:mt-16 xl:max-w-277.5">
        {clients.map(({ name, logo, width }) => (
          <li key={name}>
            <Image
              src={logo}
              alt={name}
              unoptimized
              className={cn("h-auto", width)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
