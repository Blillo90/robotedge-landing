export const heroQuery = `*[_type == "hero"][0]{
  titular,
  subtitulo,
  textoCTA
}`

export const globalColorsQuery = `*[_type == "globalColors"][0]{
  colorPrincipal,
  colorSecundario,
  colorAcento
}`

export const testimonialsQuery = `*[_type == "testimonial"] | order(orden asc){
  titulo,
  cita,
  nombre,
  rol,
  iniciales
}`

export const faqQuery = `*[_type == "faqItem"] | order(orden asc){
  pregunta,
  respuesta
}`
