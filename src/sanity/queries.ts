export const heroQuery = `*[_type == "hero"][0]{ titular, subtitulo, textoCTA }`
export const globalColorsQuery = `*[_type == "globalColors"][0]{ colorPrincipal, colorSecundario, colorAcento }`
export const testimonialsQuery = `*[_type == "testimonial"] | order(orden asc){ titulo, cita, nombre, rol, iniciales }`
export const faqQuery = `*[_type == "faqItem"] | order(orden asc){ pregunta, respuesta }`

export const problemQuery = `*[_type == "problemSection"][0]{
  badge, titulo, parrafo, notaInferior,
  tituloEmocional, tituloAlgoritmico,
  itemsEmocional[]{ titulo, cuerpo },
  itemsAlgoritmico[]{ titulo, cuerpo }
}`

export const bridgeQuery = `*[_type == "bridgeSection"][0]{
  cita, pieQuote,
  pasos[]{ titulo, descripcion }
}`

export const featuresQuery = `*[_type == "featuresSection"][0]{
  badge, titulo, parrafo,
  features[]{ titulo, descripcion, etiqueta }
}`

export const whoIsForQuery = `*[_type == "whoIsForSection"][0]{
  badge, titulo, itemsParaQuien, tituloNo, itemsNoParaQuien
}`

export const howItWorksQuery = `*[_type == "howItWorksSection"][0]{
  badge, titulo, parrafo,
  fases[]{ titulo, duracion, descripcion }
}`

export const aboutQuery = `*[_type == "aboutSection"][0]{
  badge, titulo, parrafo1, parrafo2,
  trustPoints[]{ etiqueta, valor }
}`

export const objectionsQuery = `*[_type == "objectionsSection"][0]{
  badge, titulo,
  objeciones[]{ pregunta, respuesta }
}`

export const guiaBannerQuery = `*[_type == "guiaBannerSection"][0]{
  badge, titulo, textoCTA,
  pilares[]{ titulo, texto }
}`

export const guiaCTAQuery = `*[_type == "guiaCTASection"][0]{
  badge, titulo, parrafo, textoCTA
}`

export const beforeAfterQuery = `*[_type == "beforeAfterSection"][0]{
  badge, titulo, tituloAntes, tituloDespues,
  itemsAntes, itemsDespues
}`

export const courseSectionQuery = `*[_type == "courseSection"][0]{
  badge, titulo, parrafo,
  modulos[]{ titulo, descripcion },
  cardBadge, cardTitulo, itemsIncluidos,
  textoCTA, textoSecundario, socialProof
}`

export const glossaryQuery = `*[_type == "glossarySection"][0]{
  badge, titulo, parrafo,
  criterios[]{ termino, estandar }
}`
