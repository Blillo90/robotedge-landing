import { defineField, defineType, defineArrayMember } from 'sanity'

export const beforeAfterSectionSchema = defineType({
  name: 'beforeAfterSection',
  title: 'Sección: Transformación (antes/después)',
  type: 'document',
  fields: [
    defineField({ name: 'badge', title: 'Etiqueta eyebrow', type: 'string' }),
    defineField({ name: 'titulo', title: 'Título', type: 'string' }),
    defineField({ name: 'tituloAntes', title: 'Título columna izquierda (antes)', type: 'string' }),
    defineField({ name: 'tituloDespues', title: 'Título columna derecha (después)', type: 'string' }),
    defineField({
      name: 'itemsAntes',
      title: 'Items "antes del curso"',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'itemsDespues',
      title: 'Items "después del curso"',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
  ],
})
