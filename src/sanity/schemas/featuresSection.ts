import { defineField, defineType, defineArrayMember } from 'sanity'

export const featuresSectionSchema = defineType({
  name: 'featuresSection',
  title: 'Sección: El Método (4 features)',
  type: 'document',
  fields: [
    defineField({ name: 'badge', title: 'Etiqueta eyebrow', type: 'string' }),
    defineField({ name: 'titulo', title: 'Título', type: 'string' }),
    defineField({ name: 'parrafo', title: 'Párrafo introductorio', type: 'text', rows: 3 }),
    defineField({
      name: 'features',
      title: 'Features (4 cards)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'titulo', title: 'Título', type: 'string' }),
          defineField({ name: 'descripcion', title: 'Descripción', type: 'text', rows: 3 }),
          defineField({ name: 'etiqueta', title: 'Etiqueta badge', type: 'string' }),
        ],
        preview: { select: { title: 'titulo' } },
      })],
    }),
  ],
})
