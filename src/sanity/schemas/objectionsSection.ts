import { defineField, defineType, defineArrayMember } from 'sanity'

export const objectionsSectionSchema = defineType({
  name: 'objectionsSection',
  title: 'Sección: Objeciones frecuentes',
  type: 'document',
  fields: [
    defineField({ name: 'badge', title: 'Etiqueta eyebrow', type: 'string' }),
    defineField({ name: 'titulo', title: 'Título', type: 'string' }),
    defineField({
      name: 'objeciones',
      title: 'Objeciones (6 cards)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'pregunta', title: 'Pregunta', type: 'string' }),
          defineField({ name: 'respuesta', title: 'Respuesta', type: 'text', rows: 3 }),
        ],
        preview: { select: { title: 'pregunta' } },
      })],
    }),
  ],
})
