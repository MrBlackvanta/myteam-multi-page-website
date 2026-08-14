"use client";

import { LinkedInIcon, PlusIcon, TwitterIcon } from "@/components/icons";
import type { Director } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";

const socials = [
  { label: "Twitter", icon: TwitterIcon },
  { label: "LinkedIn", icon: LinkedInIcon },
];

export default function DirectorCard({ name, role, quote, avatar }: Director) {
  const [open, setOpen] = useState(false);
  const quoteId = useId();

  return (
    <div className="relative pb-7">
      <div
        className={cn(
          "h-63.25 px-6 text-center motion-safe:transition-colors",
          open ? "bg-dark-green" : "bg-sacramento-state-green",
        )}
      >
        <div
          className={cn("flex flex-col items-center pt-8", { hidden: open })}
        >
          <Image
            src={avatar}
            alt=""
            width={96}
            height={96}
            className="rounded-full ring-2 ring-avatar-ring"
          />
          <p className="mt-4 text-lead font-bold text-rapture-blue">{name}</p>
          <p className="text-body font-medium italic">{role}</p>
        </div>

        <div
          id={quoteId}
          className={cn("flex flex-col items-center pt-8.75", {
            hidden: !open,
          })}
        >
          <p className="text-lead font-bold text-rapture-blue">{name}</p>
          <p className="mt-2 max-w-58.75 text-body xl:max-w-63.5">{quote}</p>
          <ul className="mt-6 flex items-center gap-4">
            {socials.map(({ label, icon: Icon }) => (
              <li key={label}>
                <Link
                  href="#"
                  aria-label={`${name} on ${label}`}
                  className="flex v-link"
                >
                  <Icon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={quoteId}
        onClick={() => setOpen((wasOpen) => !wasOpen)}
        className={cn(
          "absolute bottom-0 left-1/2 flex size-14 -translate-x-1/2 items-center justify-center rounded-full text-sacramento-state-green v-focus motion-safe:transition-colors",
          open
            ? "bg-rapture-blue hover:bg-light-coral"
            : "bg-light-coral hover:bg-rapture-blue",
        )}
      >
        <PlusIcon
          className={cn("motion-safe:transition-transform", {
            "rotate-45": open,
          })}
        />
        <span className="sr-only">{name}’s quote</span>
      </button>
    </div>
  );
}
