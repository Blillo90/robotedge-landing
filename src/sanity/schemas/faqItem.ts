import { defineField, defineType } from 'sanity'

export const faqItemSchema = defineType({
  name: 'faqItem',
  title: 'Pregunta frecuente',
  type: 'document',
  preview: {
    select: { title: 'pregunta' },
  },
  fields: [
    defineField({
      name: 'orden',
      title: 'Orden de aparición',
      type: 'number',
      description: 'Número que define en qué posición aparece esta pregunta. El 1 sale primero.',
      validation: (r) => r.required().integer().positive(),
    }),
    defineField({
      name: 'pregunta',
      title: 'Pregunta',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'respuesta',
      title: 'Respuesta',
      type: 'text',
      rows: 5,
      validation: (r) => r.required(),
    }),
  ],
})
