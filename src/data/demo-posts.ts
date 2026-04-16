import type { Post } from '@/types'

export const demoPosts: Post[] = [
  {
    id: 'demo-1',
    title: 'Cómo construí mi primer robot de trading en Python paso a paso',
    slug: 'primer-robot-trading-python',
    excerpt:
      'Desde la idea hasta el bot operando en live: te cuento exactamente qué hice, qué errores cometí y cómo evitarlos.',
    content: `
<h2>Por qué la mayoría fracasa con el trading manual</h2>
<p>El problema no es la falta de talento ni de información. El mercado está lleno de traders inteligentes que pierden dinero sistemáticamente. La causa real es estructural: las decisiones emocionales introducen un sesgo que ningún ser humano puede eliminar por completo.</p>
<p>Un robot de trading no tiene ego. No tiene miedo de perder, no tiene codicia cuando el mercado sube, no sale de una posición ganadora antes de tiempo porque "prefiere asegurar". Ejecuta las reglas exactamente como se definieron — las 24 horas del día, los 7 días de la semana.</p>

<h2>Los tres componentes de un sistema algorítmico</h2>
<p>Antes de escribir una sola línea de código, necesitas entender la arquitectura de un sistema de trading automatizado:</p>
<ul>
  <li><strong>La señal</strong>: la lógica que determina cuándo entrar y salir del mercado. Puede basarse en indicadores técnicos, patrones de precio, datos fundamentales o una combinación de todos.</li>
  <li><strong>La gestión de riesgo</strong>: el tamaño de cada posición, el stop loss, el drawdown máximo permitido. Esta capa es más importante que la propia señal.</li>
  <li><strong>La ejecución</strong>: la conexión con el broker, el manejo de órdenes, los logs. Donde más bugs aparecen en producción.</li>
</ul>

<h2>El proceso correcto: de la idea al live trading</h2>
<p>La metodología que funciona sigue siempre el mismo orden. No hay atajos.</p>
<ol>
  <li><strong>Define la hipótesis</strong>: ¿Qué ineficiencia del mercado intentas explotar? Escríbela en una frase antes de tocar el código.</li>
  <li><strong>Datos históricos de calidad</strong>: Los resultados del backtesting son tan buenos como los datos que usas. Datos con gaps o errores producen estrategias que no funcionan en real.</li>
  <li><strong>Backtesting sin overfitting</strong>: Usa walk-forward testing, divide en in-sample y out-of-sample. Una estrategia que funciona perfectamente en el pasado pero no en datos nuevos no vale nada.</li>
  <li><strong>Paper trading</strong>: Antes de arriesgar dinero real, ejecuta la estrategia en simulado durante al menos 4-6 semanas. Monitoriza latencia, slippage y comportamiento en mercados volátiles.</li>
  <li><strong>Live con tamaño mínimo</strong>: El primer mes en real, usa el mínimo posible. El mercado real siempre difiere ligeramente del simulado.</li>
</ol>

<h2>Python como punto de partida</h2>
<p>Python se ha convertido en el estándar de facto para el trading algorítmico gracias a su ecosistema: <code>pandas</code> para manipulación de datos, <code>vectorbt</code> o <code>backtrader</code> para backtesting, <code>ccxt</code> para conectar con exchanges de criptomonedas, o las APIs nativas de Interactive Brokers, Alpaca u OANDA para mercados regulados.</p>
<p>No necesitas ser un experto en Python para empezar. Necesitas entender los conceptos del mercado que quieres automatizar y aprender lo suficiente del lenguaje para traducirlos a código.</p>

<h2>El error más común que cometen los principiantes</h2>
<p>Intentar construir el sistema perfecto antes de empezar. El perfeccionismo mata más estrategias que el propio mercado.</p>
<p>Empieza con algo sencillo: una media móvil, un breakout de apertura, un mean-reversion básico. Hazlo funcionar de principio a fin — señal, backtesting, gestión de riesgo, ejecución. Luego mejóralo.</p>
<p>Un sistema simple que entiendes completamente y ejecutas con disciplina va a superar siempre a un sistema complejo que no comprendes del todo.</p>

<blockquote>
  El objetivo no es tener razón. El objetivo es tener un proceso repetible que, aplicado con consistencia, genere una ventaja estadística sobre el tiempo.
</blockquote>

<p>En los próximos artículos veremos cómo implementar un backtesting serio con Python, cómo validar una estrategia sin caer en el overfitting y cómo conectar tu primer bot a un broker real.</p>
    `.trim(),
    published: true,
    created_at: '2025-04-07T00:00:00Z',
    updated_at: '2025-04-07T00:00:00Z',
  },
]
