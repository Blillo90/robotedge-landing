import { defineField, defineType } from 'sanity'

export const heroSchema = defineType({
  name: 'hero',
  title: 'Hero (sección principal)',
  type: 'document',
  fields: [
    defineField({
      name: 'titular',
      title: 'Titular principal',
      type: 'string',
      description: 'El título grande que aparece en la parte superior de la web.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'subtitulo',
      title: 'Párrafo de apertura',
      type: 'text',
      rows: 4,
      description: 'El texto descriptivo que aparece debajo del titular.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'textoCTA',
      title: 'Texto del botón de acción',
      type: 'string',
      description: 'El texto que aparece en el botón principal. Ej: "Quiero montarlo ya →"',
      validation: (r) => r.required(),
    }),
  ],
})
