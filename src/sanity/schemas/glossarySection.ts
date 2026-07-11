import { defineField, defineType, defineArrayMember } from 'sanity'

export const glossarySectionSchema = defineType({
  name: 'glossarySection',
  title: 'Sección: Protocolo de calidad (glosario)',
  type: 'document',
  fields: [
    defineField({ name: 'badge', title: 'Etiqueta eyebrow', type: 'string' }),
    defineField({ name: 'titulo', title: 'Título', type: 'string' }),
    defineField({ name: 'parrafo', title: 'Párrafo introductorio', type: 'text', rows: 3 }),
    defineField({
      name: 'criterios',
      title: 'Criterios de calidad',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'termino', title: 'Término', type: 'string' }),
          defineField({ name: 'estandar', title: 'Explicación', type: 'text', rows: 3 }),
        ],
        preview: { select: { title: 'termino' } },
      })],
    }),
  ],
})
