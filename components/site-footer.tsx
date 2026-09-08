export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary font-serif text-lg font-semibold text-primary-foreground"
              >
                S
              </span>
              <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
                StratoEdge Capital
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
              A disciplined investment management firm focused on diversified,
              long-term portfolios. Capital is at risk.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterCol
              heading="Firm"
              links={['Approach', 'Strategies', 'Process', 'Disclosures']}
            />
            <FooterCol
              heading="Legal"
              links={['Terms', 'Privacy', 'Complaints', 'Conflicts of interest']}
            />
            <FooterCol
              heading="Contact"
              links={['Request a consultation', 'Client access']}
            />
          </div>
        </div>

        <div className="mt-12 space-y-4 border-t border-border pt-8">
          <p className="text-xs leading-relaxed text-muted-foreground text-pretty">
            The information on this website is provided for general information
            only and does not constitute investment, tax, or legal advice, nor
            an offer or solicitation to buy or sell any security. Investing
            involves risk, including the possible loss of principal. Target
            returns are objectives, not guarantees, and past performance is not
            indicative of future results. StratoEdge Capital does not offer
            fixed or guaranteed daily returns.
          </p>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} StratoEdge Capital. This is a
            demonstration website and not a live, regulated financial service.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  heading,
  links,
}: {
  heading: string
  links: string[]
}) {
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-widest text-foreground">
        {heading}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#contact"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
