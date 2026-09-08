'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

export function ContactCta() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="scroll-mt-16 bg-muted">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Get in touch
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
              Request a no-obligation consultation.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
              Tell us a little about your goals and an advisor will follow up.
              There is no fee for an initial conversation, and no funds are
              collected through this website.
            </p>

            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-foreground">Email</dt>
                <dd className="text-muted-foreground">
                  advisors@stratoedgecapital.example
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Office hours</dt>
                <dd className="text-muted-foreground">
                  Monday – Friday, 9:00 – 17:00
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-lg border border-border bg-card p-7 lg:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                  Thank you
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
                  Your request has been received. An advisor will be in touch
                  within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Full name" autoComplete="name" />
                  <Field
                    id="email"
                    label="Email"
                    type="email"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-foreground"
                  >
                    Area of interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="mt-2 w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring"
                    defaultValue="Balanced Growth"
                  >
                    <option>Capital Preservation</option>
                    <option>Balanced Growth</option>
                    <option>Long-Term Equity</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 w-full resize-none rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring"
                    placeholder="A few words about your goals"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Request consultation
                </button>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  By submitting, you agree to be contacted about your enquiry.
                  We never ask for deposits or payment details through this
                  form.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type = 'text',
  autoComplete,
}: {
  id: string
  label: string
  type?: string
  autoComplete?: string
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring"
      />
    </div>
  )
}
