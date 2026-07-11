import { defineField, defineType, defineArrayMember } from 'sanity'

export const whoIsForSectionSchema = defineType({
  name: 'whoIsForSection',
  title: 'Sección: Para quién es',
  type: 'document',
  fields: [
    defineField({ name: 'badge', title: 'Etiqueta eyebrow', type: 'string' }),
    defineField({ name: 'titulo', title: 'Título', type: 'string' }),
    defineField({
      name: 'itemsParaQuien',
      title: 'Lista SÍ es para ti',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({ name: 'tituloNo', title: 'Encabezado columna NO', type: 'string' }),
    defineField({
      name: 'itemsNoParaQuien',
      title: 'Lista NO es para ti',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
  ],
})
