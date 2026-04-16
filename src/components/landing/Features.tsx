const features = [
  {
    title: 'Rules-Based Trading',
    description:
      'Every automated trading strategy runs on explicit, testable logic — no discretion, no second-guessing. Just consistent, repeatable execution.',
  },
  {
    title: 'Backtesting & Validation',
    description:
      'Stress-test every trading bot against historical data using rigorous statistical methods. Know your edge before you risk a single dollar.',
  },
  {
    title: 'Risk Management',
    description:
      'Position sizing, drawdown controls, and capital allocation built directly into your algorithms — because protecting capital matters as much as capturing returns.',
  },
  {
    title: 'Live Bot Deployment',
    description:
      'Go from backtested strategy to fully operational trading bot: broker integration, real-time monitoring, and ongoing refinement — covered step by step.',
  },
]

export default function Features() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-lg mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            The four pillars of algorithmic trading
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Systematic trading is a learnable discipline. We cover every layer
            — from strategy logic to live bot deployment — so nothing is a black box.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-3">
              <div className="w-6 h-px bg-slate-900" />
              <h3 className="font-semibold text-slate-900 text-sm">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
