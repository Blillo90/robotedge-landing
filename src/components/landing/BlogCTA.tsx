import Link from 'next/link'

export default function BlogCTA() {
  return (
    <section className="relative py-28 px-6 bg-bg-surface overflow-hidden">

      {/* Bottom glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 65% at 50% 110%, rgba(34,211,160,0.07) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Vertical accent line */}
        <div
          className="w-px h-12 mx-auto mb-8"
          style={{ background: 'rgba(34,211,160,0.35)' }}
        />

        <h2
          className="font-display font-extrabold text-ink-1 leading-tight mb-6"
          style={{ fontSize: 'clamp(30px, 5vw, 58px)' }}
        >
          Start building your edge
        </h2>

        <p
          className="text-ink-2 leading-relaxed mb-10 mx-auto"
          style={{ maxWidth: '44ch' }}
        >
          Explore our latest guides on automated trading strategies, trading
          bot development, and risk management — everything you need to trade
          systematically, not emotionally.
        </p>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 bg-edge hover:bg-edge-dim text-bg-base text-sm font-medium px-8 py-4 transition-colors"
        >
          Read the Guides
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  )
}
