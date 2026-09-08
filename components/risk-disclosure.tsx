import { AlertTriangle } from 'lucide-react'

export function RiskDisclosure() {
  return (
    <section id="disclosures" className="scroll-mt-16 bg-primary">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/[0.04] p-7 lg:p-10">
          <div className="flex items-center gap-3">
            <AlertTriangle
              className="h-5 w-5 text-accent"
              aria-hidden="true"
            />
            <h2 className="font-serif text-xl font-semibold text-primary-foreground">
              Important risk disclosure
            </h2>
          </div>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-primary-foreground/70 text-pretty">
            <p>
              All investments carry risk, including the possible loss of the
              full amount invested. The value of a portfolio can fall as well as
              rise, and you may get back less than you put in.
            </p>
            <p>
              StratoEdge Capital does not offer, and you should be deeply
              skeptical of anyone who offers, guaranteed or fixed returns —
              particularly high daily or weekly payouts. Such structures are a
              common hallmark of fraudulent schemes.
            </p>
            <p>
              Target return ranges shown on this site are long-term objectives
              based on our modeling of diversified portfolios. They are not
              guarantees, predictions, or promises of future performance. Past
              performance is not a reliable indicator of future results.
            </p>
            <p>
              This website is for general information only and does not
              constitute financial, tax, or legal advice, nor an offer or
              solicitation to buy any security. Consider your own circumstances
              and consult a licensed professional before investing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
