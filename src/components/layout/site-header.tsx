import { Logo } from "@/components/icons";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import NavLinks from "./nav-links";

export default function SiteHeader() {
  return (
    <header className="bg-midnight-green pt-12 md:pt-16 xl:pt-18.25">
      <div className="v-container-chrome flex h-8 items-center md:h-12">
        <div data-behind-menu className="contents">
          <Link href="/" aria-label="myteam, home" className="shrink-0 v-focus">
            <Logo className="h-8 w-32 xl:h-10 xl:w-40" />
          </Link>
          <NavLinks variant="header" />
          <Link
            href="/contact"
            className="ml-auto v-btn hidden v-btn-on-dark md:inline-flex"
          >
            contact us
          </Link>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
