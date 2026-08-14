import { Logo } from "@/components/icons";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import NavLinks from "./nav-links";

export default function SiteHeader() {
  return (
    <header className="bg-midnight-green pt-12 md:pt-16 xl:pt-18.25">
      <div className="v-container-chrome flex h-8 items-center md:h-12">
        <Link href="/" aria-label="myteam, home" className="v-focus shrink-0">
          <Logo aria-hidden="true" role={undefined} className="h-8 w-32 xl:h-10 xl:w-40" />
        </Link>
        <NavLinks variant="header" />
        <Link
          href="/contact"
          className="v-btn v-btn-on-dark ml-auto hidden md:inline-flex"
        >
          contact us
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
}
