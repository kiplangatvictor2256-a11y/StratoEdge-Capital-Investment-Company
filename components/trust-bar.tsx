const metrics = [
  { value: 'Since 2011', label: 'Managing client portfolios' },
  { value: 'Fiduciary', label: 'Duty on every mandate' },
  { value: 'Diversified', label: 'Across global asset classes' },
  { value: 'Transparent', label: 'Fees disclosed up front' },
]

export function TrustBar() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-border border-x border-border lg:grid-cols-4 lg:divide-y-0">
        {metrics.map((m) => (
          <div key={m.label} className="px-6 py-8">
            <p className="font-serif text-xl font-semibold text-foreground">
              {m.value}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
