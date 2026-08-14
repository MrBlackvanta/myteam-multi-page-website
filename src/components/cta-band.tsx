import Link from "next/link";

export default function CtaBand() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-light-coral text-sacramento-state-green"
    >
      <div className="v-container">
        <div className="mx-auto flex max-w-230 flex-col items-center gap-6 py-20.75 text-center md:h-50 md:flex-row md:justify-between md:gap-6 md:py-0 md:text-left">
          <h2 id="cta-heading" className="text-h2-sm xl:text-h2 font-bold">
            Ready to get started?
          </h2>
          <Link href="/contact" className="v-btn v-btn-on-coral shrink-0">
            contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
