const specs = [
  { label: 'Focus',    value: 'Algorithmic & Quantitative Trading' },
  { label: 'Format',   value: 'Step-by-Step Guides & Articles' },
  { label: 'Language', value: 'English & Spanish' },
  { label: 'Topics',   value: 'Trading Bots, Backtesting, Risk, Automation' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-bg-base">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">

        {/* Left: copy */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px bg-edge" />
            <span
              className="text-xs tracking-[0.22em] uppercase text-edge"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Who we are
            </span>
          </div>
          <h2
            className="font-display font-bold text-ink-1 leading-tight mb-6"
            style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}
          >
            A trading academy built for systematic traders
          </h2>
          <p className="text-ink-2 leading-relaxed mb-5">
            RobotEdge is a trading academy dedicated to algorithmic and
            quantitative trading. We help traders replace gut-feel decisions
            with systematic, rules-based strategies powered by real data.
          </p>
          <p className="text-ink-2 leading-relaxed">
            Our guides cover everything from designing your first automated
            trading strategy to deploying fully operational trading bots —
            written by active algo traders, for traders who take their edge
            seriously.
          </p>
        </div>

        {/* Right: spec table */}
        <div
          className="bg-bg-surface"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {specs.map((s, i) => (
            <div
              key={s.label}
              className="flex items-start justify-between gap-8 px-8 py-6"
              style={{
                borderBottom:
                  i < specs.length - 1 ? '1px solid rgba(255,255,255,0.06)' : undefined,
              }}
            >
              <dt
                className="text-xs tracking-[0.15em] uppercase text-ink-3 shrink-0"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {s.label}
              </dt>
              <dd className="text-sm font-medium text-ink-1 text-right">
                {s.value}
              </dd>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
