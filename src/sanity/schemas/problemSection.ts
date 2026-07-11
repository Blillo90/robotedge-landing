import { defineField, defineType, defineArrayMember } from 'sanity'

export const problemSectionSchema = defineType({
  name: 'problemSection',
  title: 'Sección: Problema (comparativa)',
  type: 'document',
  fields: [
    defineField({ name: 'badge', title: 'Etiqueta eyebrow', type: 'string' }),
    defineField({ name: 'titulo', title: 'Título', type: 'string' }),
    defineField({ name: 'parrafo', title: 'Párrafo introductorio', type: 'text', rows: 3 }),
    defineField({ name: 'notaInferior', title: 'Nota inferior', type: 'text', rows: 2 }),
    defineField({ name: 'tituloEmocional', title: 'Cabecera columna izquierda', type: 'string' }),
    defineField({ name: 'tituloAlgoritmico', title: 'Cabecera columna derecha', type: 'string' }),
    defineField({
      name: 'itemsEmocional',
      title: 'Items trading emocional',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'titulo', title: 'Título', type: 'string' }),
          defineField({ name: 'cuerpo', title: 'Descripción', type: 'text', rows: 2 }),
        ],
        preview: { select: { title: 'titulo' } },
      })],
    }),
    defineField({
      name: 'itemsAlgoritmico',
      title: 'Items trading algorítmico',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'titulo', title: 'Título', type: 'string' }),
          defineField({ name: 'cuerpo', title: 'Descripción', type: 'text', rows: 2 }),
        ],
        preview: { select: { title: 'titulo' } },
      })],
    }),
  ],
})
