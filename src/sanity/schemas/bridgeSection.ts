import { defineField, defineType, defineArrayMember } from 'sanity'

export const bridgeSectionSchema = defineType({
  name: 'bridgeSection',
  title: 'Sección: Cita puente',
  type: 'document',
  fields: [
    defineField({ name: 'cita', title: 'Texto de la cita', type: 'text', rows: 4 }),
    defineField({ name: 'pieQuote', title: 'Pie de la cita', type: 'string' }),
    defineField({
      name: 'pasos',
      title: 'Pasos (3 cards)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'titulo', title: 'Título', type: 'string' }),
          defineField({ name: 'descripcion', title: 'Descripción', type: 'text', rows: 2 }),
        ],
        preview: { select: { title: 'titulo' } },
      })],
    }),
  ],
})
