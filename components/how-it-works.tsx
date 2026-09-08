const steps = [
  {
    step: '01',
    title: 'Discovery',
    body: 'We start with a conversation about your goals, obligations, and comfort with risk — no commitment required.',
  },
  {
    step: '02',
    title: 'Plan & proposal',
    body: 'You receive a written proposal outlining a recommended strategy, expected risk, and a full breakdown of fees.',
  },
  {
    step: '03',
    title: 'Onboarding',
    body: 'Accounts are opened in your name at a regulated, third-party custodian. StratoEdge never takes custody of your funds.',
  },
  {
    step: '04',
    title: 'Ongoing stewardship',
    body: 'We manage and rebalance your portfolio, and report transparently on performance, positioning, and costs.',
  },
]

export function HowItWorks() {
  return (
    <section id="process" className="scroll-mt-16 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            How we work together
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
            A clear process, with your money held safely in your name.
          </h2>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.step} className="flex flex-col bg-card p-7">
              <span className="font-serif text-2xl font-semibold text-accent">
                {s.step}
              </span>
              <h3 className="mt-4 text-base font-medium text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
