import { defineField, defineType, defineArrayMember } from 'sanity'

export const guiaBannerSectionSchema = defineType({
  name: 'guiaBannerSection',
  title: 'Sección: Banner Guía',
  type: 'document',
  fields: [
    defineField({ name: 'badge', title: 'Etiqueta eyebrow', type: 'string' }),
    defineField({ name: 'titulo', title: 'Título', type: 'string' }),
    defineField({ name: 'textoCTA', title: 'Texto del botón', type: 'string' }),
    defineField({
      name: 'pilares',
      title: 'Pilares (3 cards)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'titulo', title: 'Título', type: 'string' }),
          defineField({ name: 'texto', title: 'Descripción', type: 'string' }),
        ],
        preview: { select: { title: 'titulo' } },
      })],
    }),
  ],
})
