-- Seed: 4 blog articles, one per silo
-- Run AFTER add_silo_to_posts.sql

INSERT INTO posts (title, slug, excerpt, content, silo, read_time, published)
VALUES

-- ─── 1. ninjatrader-tecnico ────────────────────────────────────────────────
(
  'Guía completa de NinjaTrader para trading algorítmico',
  'guia-completa-ninjatrader-trading-algoritmico',
  'Aprende a instalar, configurar y programar estrategias automatizadas en NinjaTrader 8, la plataforma preferida por los traders algorítmicos profesionales.',
  '<article>
  <h1>Guía completa de NinjaTrader para trading algorítmico</h1>

  <p><strong>NinjaTrader 8 es la plataforma de referencia para crear y ejecutar robots de trading en futuros y forex.</strong> Con un IDE integrado basado en C#, acceso directo a datos tick-by-tick y un simulador de backtesting avanzado, es la elección de más del <strong>60 % de los traders algorítmicos independientes</strong> que operan futuros en CME.</p>

  <h2>¿Qué es NinjaTrader y por qué usarlo?</h2>
  <p><strong>NinjaTrader es una plataforma de análisis técnico y trading automatizado orientada a futuros y forex.</strong> A diferencia de MetaTrader —diseñado principalmente para forex al contado— NT8 ofrece conectividad nativa con brokers como Interactive Brokers, TD Ameritrade o Rithmic, y acceso a los contratos de CME (ES, NQ, CL, GC) sin necesidad de adaptadores de terceros.</p>
  <p>Sus ventajas clave para el trading algorítmico:</p>
  <ul>
    <li>Lenguaje <strong>NinjaScript</strong> basado en C# con autocompletado y depurador integrado.</li>
    <li>Backtesting con datos tick-by-tick reales, no solo OHLC interpolado.</li>
    <li>Optimizador walk-forward incorporado para validar la robustez de las estrategias.</li>
    <li>Versión base <strong>gratuita</strong> para análisis y paper trading ilimitado.</li>
    <li>Licencia de trading en vivo desde 1.099 $ (pago único, sin suscripción mensual).</li>
  </ul>

  <h2>Instalación y configuración inicial</h2>
  <p><strong>El proceso de instalación de NinjaTrader 8 tarda menos de 15 minutos.</strong> Sigue estos pasos:</p>
  <ol>
    <li>Descarga el instalador desde <code>ninjatrader.com/platform/download</code>.</li>
    <li>Ejecuta el instalador con privilegios de administrador. Requiere .NET Framework 4.7.2 o superior (Windows 10/11 lo incluye por defecto).</li>
    <li>Al arrancar por primera vez, el asistente te pedirá conectar un broker o activar la cuenta de simulación (SIM). Elige <strong>simulación</strong> para empezar sin riesgo.</li>
    <li>Configura la zona horaria del mercado en <em>Tools → Options → General → Time Zone</em>. Usa siempre la zona del mercado que vayas a operar (Eastern Time para CME).</li>
    <li>Descarga datos históricos gratuitos desde <em>Tools → Historical Data Manager</em>. Para el ES (E-mini S&P 500), selecciona los últimos 10 años de datos de 1 minuto como mínimo.</li>
  </ol>

  <h2>Estructura de una estrategia en NinjaScript</h2>
  <p><strong>Una estrategia de NinjaTrader es una clase C# que hereda de Strategy y contiene tres métodos principales.</strong> El método OnStateChange gestiona la inicialización; OnBarUpdate contiene la lógica de señales que se ejecuta en cada barra de mercado.</p>
  <p>Los elementos fundamentales de cualquier estrategia:</p>
  <ul>
    <li><strong>Parámetros configurables:</strong> valores numéricos que el usuario puede ajustar sin tocar el código (períodos de indicadores, niveles de stop, etc.).</li>
    <li><strong>Inicialización de indicadores:</strong> en el estado DataLoaded se crean las instancias de los indicadores que usará la estrategia.</li>
    <li><strong>Lógica de entrada y salida:</strong> condiciones que, al cumplirse, generan órdenes de compra o venta.</li>
    <li><strong>Gestión de posición:</strong> reglas para el stop-loss, take-profit y tamaño de posición.</li>
  </ul>
  <p>Una estrategia de cruce de medias móviles, por ejemplo, entra largo cuando la media rápida cruza por encima de la lenta, y cierra cuando ocurre el cruce inverso. Esta lógica, que en trading discrecional requiere atención constante, en NinjaTrader se ejecuta automáticamente las 24 horas del día.</p>

  <h2>Backtesting paso a paso</h2>
  <p><strong>El backtesting en NinjaTrader utiliza el motor Tick Replay, que simula cada tick histórico como si fuera en tiempo real.</strong> Esto elimina el look-ahead bias que sufren plataformas que solo trabajan con barras OHLC.</p>
  <ol>
    <li>Abre el <em>Strategy Analyzer</em> desde el menú principal.</li>
    <li>Selecciona tu estrategia en el desplegable <em>Strategy</em>.</li>
    <li>Configura el instrumento (ej: ES 06-24), la resolución (1 minuto) y el período (mínimo 3 años).</li>
    <li>Activa <strong>Tick Replay</strong> en la pestaña <em>Backtest</em> para máxima fidelidad.</li>
    <li>Establece un modelo de comisiones realista: para el ES, aproximadamente <strong>4,20 $ por vuelta</strong> (entrada + salida) incluyendo slippage.</li>
    <li>Ejecuta y analiza el reporte: presta atención al <em>Profit Factor</em> (objetivo: &gt;1,5), <em>Max Drawdown</em> (objetivo: &lt;20 %) y <em>Win Rate</em>.</li>
  </ol>

  <h2>Optimización walk-forward</h2>
  <p><strong>La optimización walk-forward divide los datos históricos en ventanas de entrenamiento y validación para evitar el sobreajuste (overfitting).</strong> Es el estándar profesional para confirmar que una estrategia tiene ventaja real y no solo se ajusta perfectamente al pasado.</p>
  <p>En NinjaTrader, accede a <em>Strategy Analyzer → Walk Forward Optimization</em>. Configura:</p>
  <ul>
    <li>Ventana de entrenamiento (<em>In-Sample</em>): 12 meses.</li>
    <li>Ventana de validación (<em>Out-of-Sample</em>): 3 meses.</li>
    <li>Número de iteraciones: mínimo 8 para cubrir 2 años de validación.</li>
    <li>Métrica de optimización: <em>Profit Factor</em> o <em>Calmar Ratio</em>, nunca el beneficio bruto.</li>
  </ul>
  <p>Una estrategia que mantiene un Profit Factor &gt;1,3 en las ventanas out-of-sample está demostrando que su ventaja es genuina y no un artefacto de los datos.</p>

  <h2>Despliegue en cuenta real</h2>
  <p><strong>Antes de pasar a dinero real, ejecuta al menos 60 operaciones en paper trading para verificar que el comportamiento coincide con el backtest.</strong> Una divergencia mayor del 15 % en el resultado esperado suele indicar un problema de configuración o datos.</p>
  <p>Para activar la estrategia en cuenta real:</p>
  <ol>
    <li>Conecta NinjaTrader a tu broker (Interactive Brokers, Rithmic o Kinetick).</li>
    <li>En el <em>Control Center</em>, abre el gráfico del instrumento.</li>
    <li>Activa la estrategia desde <em>Strategy → Enable Strategy</em>.</li>
    <li>Configura las alertas de email o SMS en <em>Tools → Alert Manager</em> para recibir notificaciones de cada operación.</li>
  </ol>

  <h2>Preguntas frecuentes sobre NinjaTrader</h2>

  <h3>¿NinjaTrader es gratuito?</h3>
  <p><strong>Sí, la versión base de NinjaTrader es completamente gratuita</strong> para análisis técnico y paper trading. Solo necesitas pagar la licencia de trading en vivo (1.099 $ pago único o 60 $/mes de alquiler) cuando quieras operar con dinero real.</p>

  <h3>¿Qué mercados puedo operar con NinjaTrader?</h3>
  <p><strong>NinjaTrader es ideal para futuros (CME, CBOT, NYMEX) y forex.</strong> Aunque técnicamente puede conectarse a brokers de acciones, su punto fuerte y su ecosistema de datos están optimizados para futuros.</p>

  <h3>¿Cuánto capital mínimo necesito para operar futuros con NinjaTrader?</h3>
  <p><strong>Para el Micro E-mini S&P 500 (MES), el margen intradiario puede ser tan bajo como 40 $</strong> con brokers como Tradovate o AMP Futures, lo que permite empezar con cuentas desde 500 €.</p>
</article>',
  'ninjatrader-tecnico',
  12,
  true
),

-- ─── 2. trading-algoritmico ────────────────────────────────────────────────
(
  'Qué es el trading algorítmico y cómo funciona',
  'que-es-el-trading-algoritmico-como-funciona',
  'El trading algorítmico es la automatización de estrategias de inversión mediante código. Descubre cómo funciona, sus ventajas reales y por qué está al alcance de cualquier trader con método.',
  '<article>
  <h1>Qué es el trading algorítmico y cómo funciona</h1>

  <p><strong>El trading algorítmico es la ejecución automática de operaciones en los mercados financieros siguiendo reglas predefinidas programadas en código.</strong> En lugar de que el trader tome decisiones en tiempo real, un algoritmo —también llamado robot o «algo»— evalúa condiciones del mercado y ejecuta las órdenes sin intervención humana. En 2024, <strong>más del 70 % del volumen total de los mercados de futuros de EE. UU.</strong> procede de sistemas algorítmicos.</p>

  <h2>Definición precisa: qué es y qué no es</h2>
  <p><strong>El trading algorítmico no es un bot de señales ni una promesa de rentabilidad automática.</strong> Es un método de trabajo que convierte una hipótesis de mercado en un conjunto de reglas verificables, las valida estadísticamente en datos históricos y las ejecuta de forma sistemática.</p>
  <p>La diferencia fundamental frente al trading discrecional:</p>
  <table>
    <thead>
      <tr>
        <th>Trading discrecional</th>
        <th>Trading algorítmico</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Decisiones en tiempo real, bajo presión</td>
        <td>Reglas definidas en frío, sin emociones</td>
      </tr>
      <tr>
        <td>Difícil de replicar y medir</td>
        <td>100 % replicable y auditable</td>
      </tr>
      <tr>
        <td>El resultado depende del estado mental del trader</td>
        <td>El resultado depende de la calidad del sistema</td>
      </tr>
      <tr>
        <td>Imposible escalar sin más tiempo de pantalla</td>
        <td>Escalable: varios algoritmos en paralelo</td>
      </tr>
    </tbody>
  </table>

  <h2>Cómo funciona un sistema algorítmico</h2>
  <p><strong>Un robot de trading sigue un ciclo continuo de cuatro pasos durante cada barra de mercado.</strong></p>
  <ol>
    <li><strong>Captura de datos:</strong> el sistema recibe el precio actual (tick, barra de 1 minuto, diaria…) y calcula los indicadores necesarios.</li>
    <li><strong>Evaluación de condiciones:</strong> comprueba si se cumplen las reglas de entrada definidas (ej: RSI por debajo de 30 y precio cruzando la media de 20 períodos al alza).</li>
    <li><strong>Envío de órdenes:</strong> si las condiciones se cumplen, envía automáticamente la orden al broker con el tamaño de posición correcto según el modelo de gestión de riesgo.</li>
    <li><strong>Gestión de la posición:</strong> supervisa el stop-loss y el take-profit hasta cerrar la operación.</li>
  </ol>
  <p>Todo esto ocurre en <strong>milisegundos</strong>, sin que el trader tenga que hacer nada.</p>

  <h2>Tipos de estrategias algorítmicas</h2>
  <p><strong>Existen cuatro familias principales de estrategias algorítmicas accesibles para traders independientes.</strong></p>
  <ul>
    <li><strong>Seguimiento de tendencia (trend-following):</strong> la más robusta históricamente. Opera a favor de movimientos sostenidos usando medias móviles, canales o momentum. Funciona bien en futuros de materias primas y índices.</li>
    <li><strong>Mean reversion (reversión a la media):</strong> apuesta a que los precios que se han alejado demasiado de su promedio volverán hacia él. Eficaz en mercados laterales y en pares de activos correlacionados.</li>
    <li><strong>Breakout:</strong> entra cuando el precio rompe un nivel relevante de soporte o resistencia con volumen. Captura los movimientos más explosivos del mercado.</li>
    <li><strong>Market making y arbitraje estadístico:</strong> requiere infraestructura más sofisticada y capital mayor; menos adecuado para empezar.</li>
  </ul>

  <h2>El proceso de desarrollo: de la idea al robot en producción</h2>
  <p><strong>Pasar de una idea de trading a un sistema en producción requiere un proceso estructurado de seis fases.</strong></p>
  <ol>
    <li><strong>Hipótesis:</strong> define la lógica en lenguaje natural. Ej: «El ES tiende a rebotar cuando cae más de un 0,5 % en los primeros 30 minutos de sesión».</li>
    <li><strong>Codificación:</strong> traduce la lógica a NinjaScript, Python o la plataforma elegida.</li>
    <li><strong>Backtesting:</strong> valida la hipótesis contra al menos 5 años de datos históricos con datos tick reales.</li>
    <li><strong>Optimización y robustez:</strong> ajusta los parámetros y verifica con walk-forward que el edge persiste fuera del período de entrenamiento.</li>
    <li><strong>Paper trading:</strong> ejecuta el sistema en tiempo real sin dinero durante al menos 60 operaciones.</li>
    <li><strong>Live trading con tamaño mínimo:</strong> empieza con 1 contrato o lote mínimo durante el primer mes para verificar que la ejecución coincide con el backtest.</li>
  </ol>

  <h2>Por qué el trading algorítmico elimina el principal problema del trader</h2>
  <p><strong>El mayor enemigo del trader no es el mercado: es su propio cerebro bajo presión.</strong> El miedo hace cerrar posiciones antes de tiempo. La euforia hace aguantar demasiado. La frustración lleva a operar por venganza. Un algoritmo no tiene ninguno de estos problemas. Ejecuta exactamente las reglas que tú definiste cuando estabas tranquilo y pensando con claridad.</p>
  <p>Varios estudios de behavioral finance confirman que el <strong>performance gap</strong> —la diferencia entre lo que haría una estrategia mecánica y lo que hace el trader real— oscila entre el <strong>2 % y el 5 % anual</strong> a favor de las reglas mecánicas, solo por el impacto de las emociones.</p>

  <h2>¿Cuánto capital necesito para empezar?</h2>
  <p><strong>Puedes comenzar a aprender y a hacer backtesting sin ningún capital.</strong> Para operar en simulación (paper trading), el único requisito es una plataforma como NinjaTrader, que es gratuita. Para dar el salto a cuenta real, con los micro-contratos de futuros disponibles en CME (MES, MNQ, MCL), puedes operar con cuentas desde <strong>500–1.000 €</strong>.</p>

  <h2>Preguntas frecuentes</h2>

  <h3>¿Necesito saber programar para hacer trading algorítmico?</h3>
  <p><strong>No es imprescindible, pero entender los fundamentos del código mejora enormemente la calidad de tus sistemas.</strong> Plataformas como NinjaTrader tienen editores visuales de estrategias que no requieren programación. Sin embargo, quien aprende aunque sea sintaxis básica de C# o Python tiene una ventaja considerable para depurar y personalizar sus sistemas.</p>

  <h3>¿El trading algorítmico garantiza ganancias?</h3>
  <p><strong>No. El trading algorítmico no garantiza ganancias, pero sí garantiza consistencia y control.</strong> La ventaja no viene del algoritmo en sí, sino de la calidad de la estrategia que programas y de la disciplina para no interferirla una vez en producción.</p>

  <h3>¿En qué mercados funciona mejor el trading algorítmico?</h3>
  <p><strong>Los mercados con mayor liquidez y spreads ajustados son los más eficientes para estrategias algorítmicas.</strong> Los futuros de índices americanos (ES, NQ), los futuros de materias primas (CL, GC) y el mercado forex mayor (EUR/USD, GBP/USD) son los favoritos de los traders algorítmicos independientes por su previsibilidad de costes y la calidad de los datos históricos disponibles.</p>
</article>',
  'trading-algoritmico',
  10,
  true
),

-- ─── 3. comparativas ──────────────────────────────────────────────────────
(
  'NinjaTrader vs MetaTrader 5: comparativa para traders algorítmicos',
  'ninjatrader-vs-metatrader-5-comparativa-trading-algoritmico',
  'Comparativa técnica y práctica entre NinjaTrader 8 y MetaTrader 5 para traders que quieren automatizar estrategias. Descubre cuál es mejor según tu mercado, presupuesto y objetivos.',
  '<article>
  <h1>NinjaTrader vs MetaTrader 5: comparativa para traders algorítmicos</h1>

  <p><strong>NinjaTrader 8 es la mejor opción para traders algorítmicos que operan futuros en CME; MetaTrader 5 domina el forex minorista y los CFDs.</strong> La elección entre ambas plataformas no depende de cuál sea «mejor» en abstracto, sino de qué mercados operas, con qué broker trabajas y qué nivel de personalización necesitas. Esta comparativa te da los datos para decidir.</p>

  <h2>Resumen rápido</h2>
  <table>
    <thead>
      <tr>
        <th>Criterio</th>
        <th>NinjaTrader 8</th>
        <th>MetaTrader 5</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mercados principales</td>
        <td>Futuros CME, forex</td>
        <td>Forex, CFDs, acciones, futuros</td>
      </tr>
      <tr>
        <td>Lenguaje de programación</td>
        <td>NinjaScript (C#)</td>
        <td>MQL5 (C++ simplificado)</td>
      </tr>
      <tr>
        <td>Coste base</td>
        <td>Gratis (live desde 1.099 $ pago único)</td>
        <td>Gratis (lo provee el broker)</td>
      </tr>
      <tr>
        <td>Calidad del backtesting</td>
        <td>Tick Replay real (muy alta)</td>
        <td>Tick data variable según proveedor</td>
      </tr>
      <tr>
        <td>Optimizador walk-forward</td>
        <td>Integrado de serie</td>
        <td>Requiere addon de pago</td>
      </tr>
      <tr>
        <td>Marketplace de estrategias</td>
        <td>NinjaTrader Ecosystem</td>
        <td>MQL5 Market (mayor volumen)</td>
      </tr>
      <tr>
        <td>Sistema operativo</td>
        <td>Windows únicamente</td>
        <td>Windows y Mac (Wine)</td>
      </tr>
      <tr>
        <td>Comunidad en español</td>
        <td>Limitada</td>
        <td>Muy amplia</td>
      </tr>
    </tbody>
  </table>

  <h2>Lenguaje de programación: NinjaScript vs MQL5</h2>
  <p><strong>NinjaScript está basado en C# moderno, lo que lo hace más legible y con mejor soporte de IDEs externos como Visual Studio.</strong> MQL5, aunque potente, tiene una sintaxis más cercana a C++ que resulta más árida para quienes vienen de lenguajes modernos.</p>
  <p>Para un trader sin experiencia previa en programación:</p>
  <ul>
    <li><strong>NinjaScript:</strong> el IDE integrado de NT8 tiene autocompletado, depurador visual y documentación contextual. La curva de aprendizaje inicial es más amable.</li>
    <li><strong>MQL5:</strong> el MetaEditor es funcional pero más limitado en experiencia de desarrollo. Compensa con una documentación muy extensa y miles de ejemplos en el Market.</li>
  </ul>
  <p>Ventaja en programación: <strong>NinjaTrader</strong> para nuevos programadores; <strong>MetaTrader 5</strong> para quien busca más recursos de comunidad.</p>

  <h2>Calidad del backtesting</h2>
  <p><strong>El Tick Replay de NinjaTrader es la característica diferencial más importante para obtener resultados de backtesting fiables.</strong> Simula cada tick histórico en el orden exacto en que ocurrió, reproduciendo incluso el libro de órdenes interno de la estrategia.</p>
  <p>MetaTrader 5 también puede utilizar datos tick si el broker los proporciona, pero la calidad y el período disponible varía drásticamente entre brokers. Con muchos brokers de MT5, los datos tick disponibles no superan 2–3 años, lo que es insuficiente para una validación robusta.</p>
  <p>Ventaja en backtesting: <strong>NinjaTrader</strong> para futuros con datos Kinetick; <strong>MetaTrader 5</strong> aceptable con brokers que ofrecen tick data propio (ej: ICMarkets, Pepperstone).</p>

  <h2>Optimización walk-forward</h2>
  <p><strong>NinjaTrader incluye el optimizador walk-forward de serie, sin coste adicional.</strong> MetaTrader 5 no incorpora walk-forward nativo; los addons más populares (Optimizer Pro, FX Blue WF Optimizer) tienen un coste de entre 100 y 300 $.</p>
  <p>Este punto es crítico: un sistema optimizado sin validación walk-forward tiene un alto riesgo de sobreajuste. La disponibilidad gratuita del walk-forward en NT8 es una ventaja competitiva real.</p>

  <h2>Ecosistema de brokers y mercados</h2>
  <p><strong>Si tu objetivo son los futuros americanos (ES, NQ, CL, GC), NinjaTrader es la única elección razonable.</strong> La lista de brokers compatibles incluye Interactive Brokers, Rithmic, Tradovate, TD Ameritrade y más de 40 FCMs (Futures Commission Merchants) regulados en EE. UU.</p>
  <p>MetaTrader 5 domina en forex minorista y CFDs, con más de 1.000 brokers en todo el mundo. Para operar índices europeos, materias primas como CFDs o pares de divisas exóticas, MT5 tiene un ecosistema más amplio.</p>

  <h2>¿Cuál elegir según tu perfil?</h2>
  <p><strong>La respuesta depende de un solo factor: el mercado que quieres operar.</strong></p>
  <ul>
    <li><strong>Elige NinjaTrader si:</strong> quieres operar futuros CME, buscas la mayor fidelidad posible en el backtesting, tienes Windows y prefieres un IDE basado en C# moderno.</li>
    <li><strong>Elige MetaTrader 5 si:</strong> tu broker es de forex/CFDs y ya tiene integración con MT5, necesitas compatibilidad con Mac, o quieres acceder al amplio marketplace del MQL5 Market.</li>
  </ul>

  <h2>Preguntas frecuentes</h2>

  <h3>¿Puedo usar NinjaTrader con un broker de forex?</h3>
  <p><strong>Sí, NinjaTrader es compatible con varios brokers de forex</strong> como FXCM, OANDA y Kinetick. Sin embargo, su punto fuerte sigue siendo la integración con brokers de futuros.</p>

  <h3>¿MetaTrader 5 es gratuito?</h3>
  <p><strong>Sí, MetaTrader 5 es gratuito</strong> y lo proporciona directamente el broker. No hay coste de plataforma para el trader.</p>

  <h3>¿Puedo migrar una estrategia de MT5 a NinjaTrader?</h3>
  <p><strong>No existe conversión automática</strong> entre MQL5 y NinjaScript, pero la lógica de trading es transferible. La reescritura de una estrategia simple de un lenguaje al otro suele llevar entre 2 y 6 horas para alguien con experiencia básica en ambos.</p>
</article>',
  'comparativas',
  11,
  true
),

-- ─── 4. estrategias-reales ────────────────────────────────────────────────
(
  'Cómo diseñar una estrategia de trading algorítmico rentable',
  'como-disenar-estrategia-trading-algoritmico-rentable',
  'Guía paso a paso para pasar de una hipótesis de mercado a una estrategia algorítmica robusta y lista para operar en cuenta real. Con criterios objetivos para saber cuándo una estrategia es suficientemente buena.',
  '<article>
  <h1>Cómo diseñar una estrategia de trading algorítmico rentable</h1>

  <p><strong>Una estrategia de trading algorítmico rentable no se encuentra: se diseña, se valida y se mejora con un proceso estructurado.</strong> El 90 % de los traders que fracasan en el trading algorítmico no fallan por falta de talento matemático, sino porque saltan de la idea al backtest sin pasar por un proceso riguroso de diseño y validación. Esta guía te explica ese proceso, paso a paso.</p>

  <h2>Paso 1: Define la hipótesis antes de tocar el código</h2>
  <p><strong>El mayor error al diseñar una estrategia algorítmica es empezar por los indicadores en lugar de por la hipótesis de mercado.</strong> Una hipótesis válida debe responder a: ¿qué ineficiencia del mercado estoy intentando capturar y por qué debería persistir?</p>
  <p>Ejemplos de hipótesis correctamente formuladas:</p>
  <ul>
    <li>«Los índices americanos tienden a extenderse en la dirección del gap de apertura durante la primera hora de sesión en días con volumen superior al promedio de 20 días.»</li>
    <li>«El EUR/USD revierte a su media de 4 horas cuando el RSI diario supera 70 o cae por debajo de 30 y hay divergencia con el precio.»</li>
    <li>«El petróleo (CL) tiende a moverse más de 1 ATR por sesión los miércoles por la publicación del informe de inventarios EIA.»</li>
  </ul>
  <p>Si no puedes explicar en dos frases por qué debería funcionar la estrategia, es una señal de alerta.</p>

  <h2>Paso 2: Define las reglas de entrada, salida y gestión de riesgo</h2>
  <p><strong>Una estrategia completa debe tener reglas explícitas para tres elementos: cuándo entrar, cuándo salir y cuánto arriesgar.</strong> No hay margen para la ambigüedad, porque el código no puede interpretar «cuando el mercado parece alcista».</p>
  <table>
    <thead>
      <tr>
        <th>Elemento</th>
        <th>Qué definir</th>
        <th>Ejemplo concreto</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Condición de entrada</td>
        <td>Indicadores, precio, tiempo, volumen</td>
        <td>RSI(14) cruza por encima de 30 y precio por encima de SMA(200)</td>
      </tr>
      <tr>
        <td>Stop-loss</td>
        <td>Fijo, ATR-based o estructural</td>
        <td>Stop a 1,5x ATR(14) del precio de entrada</td>
      </tr>
      <tr>
        <td>Take-profit</td>
        <td>Fijo, ratio R:R o trailing</td>
        <td>Target a 3x ATR(14) → ratio 1:2</td>
      </tr>
      <tr>
        <td>Filtro de sesión</td>
        <td>Horario de operación</td>
        <td>Solo entre 09:30 y 16:00 ET</td>
      </tr>
      <tr>
        <td>Tamaño de posición</td>
        <td>% de capital arriesgado por operación</td>
        <td>Máximo 1 % del capital por operación</td>
      </tr>
    </tbody>
  </table>

  <h2>Paso 3: Backtesting con datos tick reales</h2>
  <p><strong>Un backtest válido debe usar datos tick reales, no barras OHLC interpoladas, y debe incluir comisiones y slippage realistas.</strong> La diferencia entre un backtest «limpio» y uno realista puede ser la diferencia entre creer que una estrategia gana un 30 % anual y descubrir que en realidad está rota.</p>
  <p>Parámetros de backtesting que no son negociables:</p>
  <ul>
    <li><strong>Período mínimo de datos:</strong> 5 años. 3 años es insuficiente para capturar distintas condiciones de mercado (tendencia, lateral, alta volatilidad).</li>
    <li><strong>Comisiones:</strong> usar el coste real de tu broker. Para el ES, ~4,20 $ por vuelta; para forex, el spread más 5–7 $ por lote estándar.</li>
    <li><strong>Slippage:</strong> añadir al menos 1 tick de slippage por operación en mercados líquidos, más en activos menos líquidos.</li>
    <li><strong>Sesgo de supervivencia:</strong> verificar que los datos históricos no excluyen períodos de alta volatilidad o eventos extremos como COVID-19 (marzo 2020) o el flash crash de 2010.</li>
  </ul>

  <h2>Paso 4: Criterios para saber si una estrategia es suficientemente buena</h2>
  <p><strong>Una estrategia pasa el filtro mínimo de calidad si cumple simultáneamente los siguientes seis criterios.</strong></p>
  <ul>
    <li><strong>Profit Factor ≥ 1,5:</strong> por cada euro perdido, se ganan al menos 1,50 €.</li>
    <li><strong>Max Drawdown ≤ 20 %:</strong> la pérdida máxima desde un pico hasta el valle siguiente no supera el 20 % de la cuenta.</li>
    <li><strong>Win Rate ≥ 40 % (con R:R 1:2) o ≥ 55 % (con R:R 1:1).</strong></li>
    <li><strong>Número de operaciones ≥ 200:</strong> menos de 200 operaciones en el backtest no ofrece significancia estadística suficiente.</li>
    <li><strong>Consistencia anual:</strong> ningún año individual en el backtest debe terminar con pérdidas superiores al 15 %.</li>
    <li><strong>Superación del walk-forward:</strong> el Profit Factor en las ventanas out-of-sample debe mantenerse por encima de 1,3.</li>
  </ul>

  <h2>Paso 5: Paper trading y ajuste al entorno real</h2>
  <p><strong>El paper trading no es opcional: es el puente entre el backtest y el dinero real.</strong> Durante el paper trading, el objetivo no es ganar, sino verificar que el sistema ejecuta exactamente como estaba diseñado.</p>
  <p>Cosas que verificar durante el paper trading:</p>
  <ul>
    <li>¿Las entradas y salidas ocurren en los precios esperados o hay un desvío sistemático?</li>
    <li>¿El sistema se activa correctamente fuera del horario de backtesting?</li>
    <li>¿Hay problemas de reconexión cuando la plataforma pierde la conexión con el broker?</li>
    <li>¿Las órdenes de stop no se convierten en órdenes de mercado en aperturas con gap?</li>
  </ul>

  <h2>Paso 6: Gestión del portafolio de estrategias</h2>
  <p><strong>Un trader algorítmico profesional no opera una sola estrategia: opera un portafolio de estrategias no correlacionadas.</strong> La diversificación entre estrategias de tendencia y reversión, entre distintos mercados y distintos marcos temporales, reduce el drawdown global del portafolio sin reducir proporcionalmente el retorno esperado.</p>
  <p>Un portafolio mínimo viable para un trader independiente puede ser:</p>
  <ul>
    <li>1 estrategia de tendencia en futuros de índices (ES o NQ).</li>
    <li>1 estrategia de reversión intradía en el mismo mercado.</li>
    <li>1 estrategia en un mercado diferente (CL, GC o EUR/USD).</li>
  </ul>
  <p>Con tres sistemas bien diseñados y no correlacionados, el drawdown global suele ser un <strong>30–40 % menor</strong> que el peor drawdown individual.</p>

  <h2>Preguntas frecuentes</h2>

  <h3>¿Cuánto tiempo lleva diseñar la primera estrategia?</h3>
  <p><strong>Con dedicación consistente de 2–3 horas diarias, la primera estrategia lista para paper trading puede estar lista en 6–8 semanas.</strong> El mayor tiempo se va en aprender la plataforma y en entender los matices del backtesting, no en la lógica de la estrategia en sí.</p>

  <h3>¿Debo optimizar muchos parámetros?</h3>
  <p><strong>No. La sobre-optimización (curve fitting) es el mayor peligro del trading algorítmico.</strong> Una estrategia robusta funciona con un rango amplio de parámetros, no solo con un valor exacto. Si tu sistema solo funciona con RSI de 14 períodos pero se rompe con 13 o 15, es una señal de sobreajuste.</p>

  <h3>¿Qué hacer cuando una estrategia empieza a perder en live?</h3>
  <p><strong>Define de antemano el criterio de parada: un drawdown en live superior al 150 % del drawdown histórico máximo es el umbral habitual para pausar y revisar.</strong> No modifiques los parámetros del sistema mientras está en producción. Si hay que cambiar algo, backtestea primero el cambio en datos nuevos.</p>
</article>',
  'estrategias-reales',
  14,
  true
);
