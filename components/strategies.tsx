const strategies = [
  {
    name: 'Capital Preservation',
    risk: 'Lower risk',
    target: '3% – 5%',
    horizon: '1–3 years',
    description:
      'A conservative mix weighted toward high-quality bonds and cash equivalents for investors prioritizing stability.',
    allocation: 'Bonds & cash heavy',
  },
  {
    name: 'Balanced Growth',
    risk: 'Moderate risk',
    target: '5% – 8%',
    horizon: '3–7 years',
    description:
      'A diversified blend of global equities and fixed income designed to balance growth with drawdown control.',
    allocation: 'Equity / bond blend',
    featured: true,
  },
  {
    name: 'Long-Term Equity',
    risk: 'Higher risk',
    target: '7% – 10%',
    horizon: '7+ years',
    description:
      'An equity-led portfolio for investors seeking long-run growth who can tolerate meaningful short-term volatility.',
    allocation: 'Global equity heavy',
  },
]

export function Strategies() {
  return (
    <section id="strategies" className="scroll-mt-16 bg-muted">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Investment strategies
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
            Mandates built around your time horizon and risk tolerance.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
            Target ranges below are long-run, annualized objectives — not
            promises. Actual results will vary and may be negative. Higher
            targets come with greater risk of loss.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {strategies.map((s) => (
            <div
              key={s.name}
              className={`flex flex-col rounded-lg border bg-card p-7 ${
                s.featured
                  ? 'border-accent ring-1 ring-accent'
                  : 'border-border'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {s.risk}
                </span>
                {s.featured && (
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">
                    Most chosen
                  </span>
                )}
              </div>

              <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                {s.name}
              </h3>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-serif text-3xl font-semibold text-foreground">
                  {s.target}
                </span>
                <span className="text-sm text-muted-foreground">
                  target / yr
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Annualized objective, not guaranteed
              </p>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground text-pretty">
                {s.description}
              </p>

              <dl className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Time horizon</dt>
                  <dd className="font-medium text-foreground">{s.horizon}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Allocation</dt>
                  <dd className="font-medium text-foreground">
                    {s.allocation}
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          Investing involves risk, including possible loss of principal. There
          is no fixed daily, weekly, or monthly payout. Diversification does not
          eliminate the risk of loss.
        </p>
      </div>
    </section>
  )
}
