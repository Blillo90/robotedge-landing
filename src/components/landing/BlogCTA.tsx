import Link from 'next/link'

export default function BlogCTA() {
  return (
    <section className="bg-slate-900 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Start building your edge</h2>
        <p className="text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto">
          Explore our latest guides on automated trading strategies, trading bot
          development, and risk management — everything you need to trade
          systematically, not emotionally.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center bg-white text-slate-900 px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-100 transition-colors"
        >
          Read the Guides
        </Link>
      </div>
    </section>
  )
}
