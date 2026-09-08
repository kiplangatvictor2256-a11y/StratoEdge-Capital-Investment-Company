import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-skyline.png"
          alt=""
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/60" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
            Independent investment management
          </span>

          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-primary-foreground text-balance sm:text-5xl lg:text-6xl">
            Patient capital, managed with discipline.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/75 text-pretty">
            We build diversified, long-term portfolios for individuals and
            institutions. Our focus is on managing risk first and compounding
            returns over years, not days. All investing involves risk,
            including the possible loss of principal.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Request a consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#strategies"
              className="inline-flex items-center justify-center rounded-sm border border-primary-foreground/25 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/5"
            >
              Explore our strategies
            </Link>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-primary-foreground/50">
            StratoEdge Capital does not guarantee returns and does not offer
            fixed daily profit schemes. Past performance is not indicative of
            future results.
          </p>
        </div>
      </div>
    </section>
  )
}
