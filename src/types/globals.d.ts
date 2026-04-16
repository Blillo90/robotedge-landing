// Augment Window for GA4 gtag calls
interface Window {
  gtag?: (...args: unknown[]) => void
  dataLayer?: unknown[]
}
