const features = [
  {
    number: '01',
    title: 'Rules-Based Systems',
    description:
      'Every automated trading strategy runs on explicit, testable logic — no guesswork, no emotional decisions. Just consistent, repeatable execution.',
  },
  {
    number: '02',
    title: 'Data-Driven Backtesting',
    description:
      'Before any trading bot goes live, it\'s stress-tested against historical data using rigorous statistical methods. Know your edge before risking a single dollar.',
  },
  {
    number: '03',
    title: 'Built-In Risk Management',
    description:
      'Position sizing, drawdown controls, and capital allocation baked directly into your algorithms — because protecting capital is as critical as generating returns.',
  },
  {
    number: '04',
    title: 'Live Bot Deployment',
    description:
      'From backtested strategy to live trading bot: broker connectivity, real-time monitoring, and ongoing optimisation — covered step by step.',
  },
]

export default function Features() {
  return (
    <section className="py-28 px-6 bg-bg-surface">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px bg-edge" />
            <span
              className="text-xs tracking-[0.22em] uppercase text-edge"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Core Curriculum
            </span>
          </div>
          <h2
            className="font-display font-bold text-ink-1 leading-tight mb-4"
            style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}
          >
            The building blocks of algorithmic trading
          </h2>
          <p className="text-ink-2 leading-relaxed" style={{ maxWidth: '52ch' }}>
            Automated trading doesn&apos;t have to be a black box. We break down
            every component — from strategy logic to live bot deployment — so
            you understand exactly how your system works.
          </p>
        </div>

        {/* Feature grid — hairline borders via gap-px */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: 'rgba(255,255,255,0.07)' }}
        >
          {features.map((f) => (
            <div
              key={f.number}
              className="feature-card p-8 bg-bg-surface"
            >
              <p
                className="feature-num font-mono text-2xl font-medium mb-6"
              >
                {f.number}
              </p>
              <h3 className="text-sm font-semibold text-ink-1 mb-3 leading-snug">
                {f.title}
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
