import { defineField, defineType, defineArrayMember } from 'sanity'

export const howItWorksSectionSchema = defineType({
  name: 'howItWorksSection',
  title: 'Sección: Cómo funciona (fases)',
  type: 'document',
  fields: [
    defineField({ name: 'badge', title: 'Etiqueta eyebrow', type: 'string' }),
    defineField({ name: 'titulo', title: 'Título', type: 'string' }),
    defineField({ name: 'parrafo', title: 'Párrafo introductorio', type: 'text', rows: 3 }),
    defineField({
      name: 'fases',
      title: 'Fases del proceso',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'titulo', title: 'Título', type: 'string' }),
          defineField({ name: 'duracion', title: 'Duración (ej: Semanas 1–4)', type: 'string' }),
          defineField({ name: 'descripcion', title: 'Descripción', type: 'text', rows: 3 }),
        ],
        preview: { select: { title: 'titulo', subtitle: 'duracion' } },
      })],
    }),
  ],
})
