import { defineField, defineType, defineArrayMember } from 'sanity'

export const aboutSectionSchema = defineType({
  name: 'aboutSection',
  title: 'Sección: Quién enseña esto (About)',
  type: 'document',
  fields: [
    defineField({ name: 'badge', title: 'Etiqueta eyebrow', type: 'string' }),
    defineField({ name: 'titulo', title: 'Título', type: 'string' }),
    defineField({ name: 'parrafo1', title: 'Primer párrafo', type: 'text', rows: 4 }),
    defineField({ name: 'parrafo2', title: 'Segundo párrafo', type: 'text', rows: 4 }),
    defineField({
      name: 'trustPoints',
      title: 'Puntos de confianza (tabla derecha)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'etiqueta', title: 'Etiqueta', type: 'string' }),
          defineField({ name: 'valor', title: 'Valor', type: 'string' }),
        ],
        preview: { select: { title: 'etiqueta', subtitle: 'valor' } },
      })],
    }),
  ],
})
