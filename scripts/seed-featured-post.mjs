import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://dfdnsvzqskcbvabafkzk.supabase.co'
const SUPABASE_KEY = 'sb_publishable_P3cHkf9yD0f8oLOGa4FQTQ_h5p9pI0D'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const post = {
  title: 'Cómo construí mi primer robot de trading en Python: guía real paso a paso',
  slug: 'robot-trading-python-guia-paso-a-paso',
  excerpt: 'Desde la idea inicial hasta el bot operando en live: los pasos exactos, los errores que cometí y cómo evitarlos. Sin atajos ni teoría vacía.',
  cover_image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80',
  published: true,
  content: `<p class="lead">Construir un robot de trading no es complicado. Lo que sí es complicado es hacerlo bien: con una hipótesis clara, datos de calidad, un backtest honesto y la disciplina de no tocarlo cuando el mercado se pone nervioso.</p>

<p>Esta es la guía que me habría ahorrado meses de prueba y error.</p>

<h2>Por qué el trading manual tiene un techo</h2>

<p>El problema del trading manual no es la falta de talento ni de información. Es estructural: el ser humano toma decisiones bajo presión emocional, con sesgos cognitivos que ninguna formación elimina del todo. El miedo a perder, la codicia cuando el mercado sube, el sesgo de confirmación al analizar setups.</p>

<p>Un sistema algorítmico no tiene ego. Ejecuta las reglas exactamente como se definieron, las 24 horas del día, los 7 días de la semana, sin cansarse y sin improvisar.</p>

<blockquote>
<p>El objetivo no es tener razón. El objetivo es tener un proceso repetible que, aplicado con consistencia, genere una ventaja estadística a lo largo del tiempo.</p>
</blockquote>

<h2>Los tres pilares de cualquier sistema algorítmico</h2>

<p>Antes de escribir una sola línea de código, entiende qué estás construyendo:</p>

<ul>
<li><strong>La señal:</strong> la lógica que determina cuándo entrar y cuándo salir. Puede ser técnica, cuantitativa, basada en sentimiento o en datos alternativos.</li>
<li><strong>La gestión del riesgo:</strong> el tamaño de cada posición, el stop loss, el máximo drawdown tolerable. Esto es lo que determina si sobrevives a una racha adversa.</li>
<li><strong>La ejecución:</strong> la conexión con el broker, el manejo de órdenes, los logs, las alertas de fallo. Lo que más se subestima y lo que más duele cuando falla.</li>
</ul>

<h2>Demo: cómo se ve un bot real en Python</h2>

<p>El siguiente video muestra cómo construir un robot de trading en Python desde cero, cubriendo la conexión con el exchange, la lógica de señal y el sistema de órdenes:</p>

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/PM0p4zQ4pTs" title="Robot de Trading con Python desde Cero" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<h2>El proceso correcto: de la idea al live trading</h2>

<ol>
<li><strong>Define la hipótesis antes de mirar datos.</strong> ¿Qué ineficiencia del mercado intentas explotar? ¿Por qué existe? ¿Por qué seguirá existiendo? Si no puedes responder esto, el sistema no tiene base.</li>
<li><strong>Consigue datos de calidad.</strong> Los resultados del backtesting son tan buenos como los datos que usas. Datos con survivorship bias, ajuste de dividendos incorrecto o slippage mal modelado producen backtests inflados que no se traducen en live.</li>
<li><strong>Backtest sin overfitting.</strong> Usa walk-forward testing. Divide el histórico en in-sample (para desarrollar) y out-of-sample (para validar). Nunca toques el out-of-sample hasta tener el sistema finalizado.</li>
<li><strong>Paper trading durante al menos 4-6 semanas.</strong> Antes de arriesgar dinero real, ejecuta la estrategia en simulado. No para ver si funciona, sino para validar la infraestructura técnica y tu propia reacción psicológica a los drawdowns en tiempo real.</li>
<li><strong>Live con tamaño mínimo.</strong> El primer mes en real, usa el capital mínimo posible. El objetivo es validar la ejecución, no ganar dinero.</li>
</ol>

<h2>Stack técnico recomendado para empezar</h2>

<p>Para un bot en Python orientado a criptomonedas o futuros, este es el stack que mejor relación coste/utilidad ofrece:</p>

<ul>
<li><code>pandas</code> + <code>numpy</code> para manipulación de datos</li>
<li><code>vectorbt</code> o <code>backtesting.py</code> para backtesting vectorizado</li>
<li><code>ccxt</code> para conectar con más de 100 exchanges</li>
<li><code>schedule</code> o <code>APScheduler</code> para la ejecución periódica</li>
<li><code>python-telegram-bot</code> para alertas en tiempo real</li>
</ul>

<h2>El error más común: optimizar en lugar de validar</h2>

<p>La mayoría de traders que fracasan con el algo trading cometen el mismo error: ajustan los parámetros del sistema hasta que el backtest se ve bien, sin entender que están memorizando el pasado en lugar de descubrir una ventaja real.</p>

<p>Un sistema con 3 parámetros que funciona en out-of-sample vale más que uno con 30 parámetros optimizados al milímetro. La simplicidad es robustez.</p>

<h2>Conclusión</h2>

<p>El trading algorítmico no es un atajo para ganar dinero rápido. Es una disciplina de ingeniería aplicada a los mercados financieros. Requiere rigor metodológico, paciencia y la humildad de reconocer cuándo una hipótesis no funciona.</p>

<p>Pero cuando está bien construido, es uno de los pocos sistemas que puede generar rendimientos consistentes sin depender de tu estado de ánimo cada mañana.</p>`,
}

const { data, error } = await supabase.from('posts').insert(post).select().single()

if (error) {
  console.error('Error inserting post:', error.message)
  process.exit(1)
}

console.log('✓ Post insertado:', data.id, '→ /blog/' + data.slug)
