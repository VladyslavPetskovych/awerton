import { useState } from 'react'
import Logo from './Logo'
import AwertonMark from './AwertonMark'

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    // No backend yet — wire this to your provider (Mailchimp, Resend, etc.).
    setSubmitted(true)
  }

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-ink text-ivory">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full origin-center animate-slow-zoom object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/main-video.mp4" type="video/mp4" />
      </video>

      {/* Legibility overlays */}
      <div className="absolute inset-0 bg-ink/35" />
      <div className="absolute inset-0 bg-linear-to-b from-ink/65 via-ink/40 to-ink/95" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 120% at 50% 40%, transparent 20%, rgba(23,21,21,0.85) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Top bar */}
        <header className="flex animate-fade-in items-center justify-between px-6 py-6 sm:px-12 sm:py-8">
          <AwertonMark className="h-8 text-gold sm:h-9" />
          <span className="font-sans text-[0.65rem] uppercase tracking-[0.35em] text-ivory/50">
            Est. 2026
          </span>
        </header>


        {/* Hero */}
        <section className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <Logo
            tone="gold"
            orientation="vertical"
            className="w-56 animate-fade-up sm:w-64"
            style={{ animationDelay: '0.05s' }}
          />

          <div
            className="mt-10 flex animate-fade-up items-center gap-4"
            style={{ animationDelay: '0.18s' }}
          >
            <span className="h-px w-8 bg-gold/50 sm:w-12" />
            <span className="font-sans text-xs uppercase tracking-[0.4em] text-gold">
              Coming Soon
            </span>
            <span className="h-px w-8 bg-gold/50 sm:w-12" />
          </div>

          <h1>
      .
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up font-sans text-base leading-relaxed text-ivory/65 sm:text-lg"
            style={{ animationDelay: '0.4s' }}
          >
            AWERTON is a modern home for investing and business management.
            Join the list to be the first through the door.
          </p>

          {/* Email capture */}
          <div
            className="mt-12 w-full max-w-md animate-fade-up"
            style={{ animationDelay: '0.52s' }}
          >
            {submitted ? (
              <p
                className="rounded-full border border-gold/40 bg-gold/10 px-6 py-3.5 font-sans text-sm tracking-wide text-gold backdrop-blur-md"
                role="status"
              >
                Thank you — you're on the list.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-sans text-sm text-ivory outline-none backdrop-blur-md transition placeholder:text-ivory/40 focus:border-gold/60 focus:bg-white/10"
                />
                <button
                  type="submit"
                  className="rounded-full bg-gold px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-wider text-ink transition hover:bg-gold/90 active:scale-95"
                >
                  Notify me
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer
          className="flex animate-fade-in flex-col items-center gap-3 px-6 py-6 text-center sm:flex-row sm:justify-between sm:px-12"
          style={{ animationDelay: '0.6s' }}
        >
          <p className="font-serif text-sm italic text-ivory/55">
            Management you can trust. Results you can feel.
          </p>
          <nav className="flex items-center gap-6 font-sans text-xs uppercase tracking-widest text-ivory/50">
            <a href="#" className="transition hover:text-gold">
              Instagram
            </a>
            <a href="#" className="transition hover:text-gold">
              LinkedIn
            </a>
            <a href="#" className="transition hover:text-gold">
              Contact
            </a>
          </nav>
        </footer>
      </div>
    </main>
  )
}
