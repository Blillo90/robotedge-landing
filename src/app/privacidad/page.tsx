import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de privacidad y cookies',
  description: 'Información sobre el tratamiento de datos personales y el uso de cookies en RobotEdge.',
  robots: { index: true, follow: true },
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#ABA79F] hover:text-[#4A4845] transition-colors mb-12"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          ← Volver al inicio
        </Link>

        <div className="prose max-w-none">
          <h1>Política de privacidad y cookies</h1>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#ABA79F' }}>
            Última actualización: mayo de 2026
          </p>

          <hr />

          <h2>1. Responsable del tratamiento</h2>
          <p>
            <strong>RobotEdge</strong> — Pablo Llobregat<br />
            Web: <a href="https://robotedge.es">robotedge.es</a><br />
            Email: <a href="mailto:hola@robotedge.es">hola@robotedge.es</a>
          </p>

          <h2>2. Datos que tratamos</h2>
          <p>
            Esta web no recopila datos personales identificables mediante formularios. Con tu consentimiento,
            se procesan datos de navegación de forma agregada y anónima a través de herramientas analíticas
            (ver sección de cookies).
          </p>

          <h2>3. Finalidad y base legal</h2>
          <p>
            El único tratamiento de datos es de carácter analítico: conocer el número de visitas, páginas
            consultadas y comportamiento general de navegación para mejorar el contenido del sitio.
          </p>
          <p>
            La base legal es el <strong>consentimiento explícito</strong> del usuario, recabado mediante el
            aviso de cookies en la primera visita. El tratamiento analítico no se activa hasta que el usuario
            acepta expresamente.
          </p>

          <h2>4. Destinatarios</h2>
          <p>
            Los datos analíticos se procesan a través de <strong>Google Analytics 4</strong> (Google LLC),
            cubierto por las garantías del Marco de Privacidad de Datos UE-EE.UU. No se ceden datos a
            terceros para fines publicitarios ni comerciales.
          </p>

          <h2>5. Plazos de conservación</h2>
          <p>
            Los datos analíticos agregados se conservan durante un máximo de 14 meses según la configuración
            de Google Analytics 4. La preferencia de cookies se almacena en el navegador del usuario durante
            12 meses.
          </p>

          <h2>6. Tus derechos</h2>
          <p>En virtud del RGPD (Reglamento UE 2016/679) puedes ejercer los siguientes derechos:</p>
          <ul>
            <li><strong>Acceso:</strong> conocer qué datos tratamos sobre ti.</li>
            <li><strong>Rectificación:</strong> corregir datos inexactos.</li>
            <li><strong>Supresión:</strong> solicitar la eliminación de tus datos.</li>
            <li><strong>Limitación:</strong> restringir el tratamiento en determinadas circunstancias.</li>
            <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado.</li>
            <li><strong>Oposición:</strong> oponerte al tratamiento.</li>
            <li><strong>Retirada del consentimiento:</strong> en cualquier momento, sin efecto retroactivo.</li>
          </ul>
          <p>
            Para ejercer cualquiera de estos derechos escríbenos a{' '}
            <a href="mailto:hola@robotedge.es">hola@robotedge.es</a>.
            También puedes reclamar ante la{' '}
            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
              Agencia Española de Protección de Datos (AEPD)
            </a>.
          </p>

          <hr />

          <h2>7. Política de cookies</h2>

          <h3>¿Qué son las cookies?</h3>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo al visitar una web.
            Permiten recordar preferencias y analizar cómo se usa el sitio.
          </p>

          <h3>Cookies que utilizamos</h3>
          <p>
            Esta web solo usa cookies analíticas de terceros, y únicamente con tu consentimiento previo:
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '1.25rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                  <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', color: '#141412' }}>Cookie</th>
                  <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', color: '#141412' }}>Proveedor</th>
                  <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', color: '#141412' }}>Finalidad</th>
                  <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', color: '#141412' }}>Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <td style={{ padding: '0.5rem 0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>_ga</td>
                  <td style={{ padding: '0.5rem 0.75rem' }}>Google Analytics</td>
                  <td style={{ padding: '0.5rem 0.75rem' }}>Distingue usuarios únicos</td>
                  <td style={{ padding: '0.5rem 0.75rem' }}>2 años</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <td style={{ padding: '0.5rem 0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>_ga_*</td>
                  <td style={{ padding: '0.5rem 0.75rem' }}>Google Analytics</td>
                  <td style={{ padding: '0.5rem 0.75rem' }}>Mantiene el estado de sesión</td>
                  <td style={{ padding: '0.5rem 0.75rem' }}>2 años</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.5rem 0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>re_cookie_consent</td>
                  <td style={{ padding: '0.5rem 0.75rem' }}>RobotEdge</td>
                  <td style={{ padding: '0.5rem 0.75rem' }}>Guarda tu preferencia de cookies</td>
                  <td style={{ padding: '0.5rem 0.75rem' }}>12 meses</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Cómo gestionar o eliminar las cookies</h3>
          <p>Puedes retirar tu consentimiento borrando las cookies desde tu navegador:</p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
            <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          </ul>

          <hr />

          <p style={{ fontSize: '0.875rem', color: '#ABA79F' }}>
            Esta política puede actualizarse. Los cambios significativos se comunicarán en esta misma página.
          </p>
        </div>
      </div>
    </main>
  )
}
