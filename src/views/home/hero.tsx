export default function Hero() {
  return (
    <section className="relative overflow-x-clip bg-midnight-green pt-20 pb-49.25 md:pt-28 md:pb-64 xl:pt-32.25 xl:pb-62.5">
      <div className="v-decor" aria-hidden="true">
        <div className="absolute top-32.25 -left-16.25 hidden size-50 bg-[url(/bg-pattern-home-1.svg)] xl:block" />
        <div className="absolute bottom-0 left-1/2 h-25 w-89.5 -translate-x-1/2 bg-[url(/bg-pattern-home-2.svg)] xl:right-0 xl:left-auto xl:translate-x-0" />
      </div>

      <div className="relative v-container">
        <div className="xl:grid xl:grid-cols-[39.6875rem_1fr] xl:items-start xl:gap-x-7.5">
          <h1 className="text-center text-h1-sm font-bold md:text-h1-md xl:text-left xl:text-h1-lg">
            Find the
            <br />
            best talent
          </h1>
          <p className="mx-auto mt-4.5 max-w-114.25 text-center text-body-loose md:mt-6 xl:mx-0 xl:mt-20.75 xl:max-w-none xl:text-left xl:text-lead">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </div>
    </section>
  );
}
