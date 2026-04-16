import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-white pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block text-xs font-medium tracking-widest text-slate-400 uppercase mb-6">
          Algorithmic Trading Academy
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6 max-w-3xl">
          Build trading bots that run on{' '}
          <span className="text-slate-400">rules</span>,{' '}
          not emotions.
        </h1>
        <p className="text-lg text-slate-500 max-w-xl mb-10 leading-relaxed">
          Learn to design, backtest, and deploy automated trading strategies
          — step by step. No guesswork. No emotion. Just systematic execution
          driven by data.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center bg-slate-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors"
          >
            Explore the Guides
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center justify-center text-slate-600 border border-slate-200 px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-50 transition-colors"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  )
}
