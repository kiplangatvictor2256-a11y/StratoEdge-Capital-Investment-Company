import Image from 'next/image'
import { ShieldCheck, Layers, LineChart } from 'lucide-react'

const principles = [
  {
    icon: ShieldCheck,
    title: 'Risk before return',
    body: 'We size every position against what could go wrong first. Capital preservation is the foundation of long-term compounding.',
  },
  {
    icon: Layers,
    title: 'Genuine diversification',
    body: 'Portfolios span equities, fixed income, and real assets across regions, so no single outcome defines your results.',
  },
  {
    icon: LineChart,
    title: 'Evidence, not hype',
    body: 'Allocations follow a documented, rules-based process. We avoid speculative products that promise outsized, guaranteed gains.',
  },
]

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-16 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Our approach
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
              Wealth is built slowly, and protected deliberately.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
              StratoEdge Capital manages money the way we would manage our own:
              with a clear plan, honest expectations, and a firm respect for
              risk. We do not chase fads or promise returns we cannot control.
              What we offer is a disciplined process and a partner accountable
              to your goals.
            </p>

            <dl className="mt-10 space-y-8">
              {principles.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-muted text-primary">
                    <p.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="font-medium text-foreground">{p.title}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {p.body}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border lg:aspect-[4/5]">
            <Image
              src="/images/approach.png"
              alt="StratoEdge Capital advisors reviewing portfolio strategy"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
