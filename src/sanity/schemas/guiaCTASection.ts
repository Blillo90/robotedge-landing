import { defineField, defineType } from 'sanity'

export const guiaCTASectionSchema = defineType({
  name: 'guiaCTASection',
  title: 'Sección: CTA final guía',
  type: 'document',
  fields: [
    defineField({ name: 'badge', title: 'Etiqueta eyebrow', type: 'string' }),
    defineField({ name: 'titulo', title: 'Título', type: 'string' }),
    defineField({ name: 'parrafo', title: 'Párrafo', type: 'text', rows: 3 }),
    defineField({ name: 'textoCTA', title: 'Texto del botón', type: 'string' }),
  ],
})
