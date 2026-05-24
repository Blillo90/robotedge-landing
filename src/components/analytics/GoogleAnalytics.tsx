import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function GoogleAnalytics() {
  if (!GA_ID) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            wait_for_update: 500,
          });
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          try {
            if (localStorage.getItem('re_cookie_consent') === 'accepted') {
              gtag('consent', 'update', { analytics_storage: 'granted' });
            }
          } catch(e) {}
          window.addEventListener('re_consent_accepted', function() {
            gtag('consent', 'update', { analytics_storage: 'granted' });
          });
        `}
      </Script>
    </>
  )
}
