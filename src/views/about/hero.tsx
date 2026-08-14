export default function Hero() {
  return (
    <section className="relative overflow-clip bg-midnight-green pt-20 pb-27 md:pt-28 md:pb-28 xl:pt-30 xl:pb-30">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-25 -bottom-25 size-50 bg-[url(/bg-pattern-about-1-mobile-nav-1.svg)] md:bottom-0"
      />

      <div className="relative v-container">
        <div className="xl:grid xl:grid-cols-[21.875rem_1fr] xl:items-start xl:gap-x-7.5">
          <h1 className="text-center text-h1-sm font-bold md:text-h1-md xl:text-left xl:leading-25">
            About
          </h1>
          <p className="mx-auto mt-4 max-w-114.25 text-center text-body-loose md:mt-6 xl:mx-0 xl:mt-11 xl:max-w-none xl:text-left xl:text-lead">
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
        </div>
      </div>
    </section>
  );
}
