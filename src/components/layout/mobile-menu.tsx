"use client";

import { CloseIcon, MenuIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavLinks from "./nav-links";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const { style } = document.body;
    const previous = style.overflow;
    style.overflow = "hidden";
    return () => {
      style.overflow = previous;
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  const trapFocus = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      close();
      return;
    }
    if (event.key !== "Tab" || !panelRef.current) return;
    const stops = panelRef.current.querySelectorAll<HTMLElement>("a, button");
    const edge = event.shiftKey ? stops[0] : stops[stops.length - 1];
    if (document.activeElement !== edge) return;
    event.preventDefault();
    (event.shiftKey ? stops[stops.length - 1] : stops[0]).focus();
  };

  return (
    <div className="ml-auto md:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="v-tap flex v-focus"
      >
        <MenuIcon />
      </button>

      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        onKeyDown={trapFocus}
        className={cn(
          "invisible fixed inset-0 z-50 flex bg-black/50 opacity-0 motion-safe:transition-[opacity,visibility] motion-safe:duration-300",
          { "visible opacity-100": open },
        )}
      >
        <button
          ref={closeRef}
          type="button"
          aria-label="Close menu"
          onClick={close}
          className="absolute top-11 right-3 z-10 p-3 v-focus"
        >
          <CloseIcon />
        </button>

        <div
          className={cn(
            "ml-auto flex w-63.75 flex-col bg-police-blue bg-[url(/bg-pattern-about-1-mobile-nav-1.svg)] bg-position-[right_-6.25rem_bottom] bg-no-repeat px-12 pt-28 motion-safe:translate-x-full motion-safe:transition-transform motion-safe:duration-300",
            { "motion-safe:translate-x-0": open },
          )}
        >
          <NavLinks variant="menu" onNavigate={close} />
          <Link
            href="/contact"
            onClick={close}
            className="mt-9 v-btn v-btn-on-dark"
          >
            contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
