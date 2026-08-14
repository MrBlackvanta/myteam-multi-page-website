import { Logo } from "@/components/icons";
import { addressLines, copyright, socialLinks } from "@/data";
import Link from "next/link";
import Attribution from "./attribution";
import NavLinks from "./nav-links";

export default function SiteFooter() {
  return (
    <footer className="bg-dark-green pt-16.5 pb-0.5 md:pt-14 xl:pt-12">
      <div className="v-container-chrome grid justify-items-center gap-y-6 text-center md:grid-cols-2 md:justify-items-stretch md:gap-x-6 md:gap-y-8 md:text-left xl:grid-cols-[17.8125rem_27.8125rem_1fr] xl:gap-0">
        <div className="flex flex-col items-center gap-6 md:items-start md:gap-13.25 xl:gap-6.25">
          <Link href="/" aria-label="myteam, home" className="v-focus">
            <Logo className="h-6 w-24 xl:h-10 xl:w-40" />
          </Link>
          <NavLinks variant="footer" />
        </div>

        <address className="text-body text-white/60 not-italic md:justify-self-end md:text-right xl:justify-self-start xl:text-left">
          {addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>

        <div className="mt-4 flex flex-col items-center gap-4 md:col-span-2 md:mt-0 md:flex-row md:justify-between xl:col-span-1 xl:h-full xl:flex-col xl:items-end xl:justify-between xl:gap-0">
          <ul className="flex gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  aria-label={label}
                  className="v-link flex"
                >
                  <Icon className="size-6" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-body text-white/60">{copyright}</p>
        </div>
      </div>

      <div className="mt-16 md:mt-14 xl:mt-12">
        <Attribution />
      </div>
    </footer>
  );
}
