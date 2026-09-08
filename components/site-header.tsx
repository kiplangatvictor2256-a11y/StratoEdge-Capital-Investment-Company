import Link from 'next/link'

const navItems = [
  { label: 'Approach', href: '#approach' },
  { label: 'Strategies', href: '#strategies' },
  { label: 'Process', href: '#process' },
  { label: 'Disclosures', href: '#disclosures' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <Link href="#top" className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary font-serif text-lg font-semibold text-primary-foreground"
          >
            S
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
            StratoEdge Capital
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden text-sm font-medium text-foreground transition-colors hover:text-muted-foreground sm:inline-flex"
          >
            Client access
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request a consultation
          </Link>
        </div>
      </div>
    </header>
  )
}
