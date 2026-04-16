import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center hero-grid bg-bg-base overflow-hidden pt-[60px]">

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 20% 40%, rgba(34,211,160,0.07) 0%, transparent 65%)',
        }}
      />

      {/* Decorative background number */}
      <div
        className="absolute right-0 bottom-0 select-none pointer-events-none hidden lg:block leading-none"
        style={{
          fontSize: 'clamp(180px, 28vw, 400px)',
          fontFamily: 'var(--font-mono)',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.022)',
          letterSpacing: '-0.05em',
        }}
        aria-hidden
      >
        01
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">

        {/* Eyebrow tag */}
        <div className="animate-fade-up delay-1 flex items-center gap-3 mb-8">
          <span className="block w-8 h-px bg-edge" />
          <span
            className="text-xs tracking-[0.22em] uppercase text-edge"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Algorithmic &amp; Automated Trading
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up delay-2 font-display font-extrabold text-ink-1 leading-[1.0] tracking-tight mb-8"
          style={{ fontSize: 'clamp(44px, 7.5vw, 100px)', maxWidth: '13ch' }}
        >
          Let your trading robots work for{' '}
          <span className="text-edge">you.</span>
        </h1>

        {/* Body */}
        <p
          className="animate-fade-up delay-3 text-ink-2 leading-relaxed mb-10"
          style={{ fontSize: '1.1rem', maxWidth: '48ch' }}
        >
          Automated trading strategies built on data, not emotion. Learn to
          design, backtest, and deploy trading bots that execute with precision
          — 24 hours a day.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-4 flex flex-col sm:flex-row gap-3">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-edge hover:bg-edge-dim text-bg-base text-sm font-medium px-6 py-3.5 transition-colors"
          >
            Explore the Guides
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center text-sm font-medium px-6 py-3.5 text-ink-2 hover:text-ink-1 transition-colors"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            About Us
          </Link>
        </div>

        {/* Stat row */}
        <div
          className="animate-fade-up delay-5 mt-20 pt-8 flex flex-wrap gap-12"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {[
            { label: 'Execution',     value: '24 / 7' },
            { label: 'Strategy type', value: 'Rules-Based' },
            { label: 'Approach',      value: 'Systematic' },
          ].map((s) => (
            <div key={s.label}>
              <p
                className="text-xs tracking-[0.15em] uppercase text-ink-3 mb-1"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {s.label}
              </p>
              <p
                className="text-sm font-medium text-ink-1"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {s.value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
