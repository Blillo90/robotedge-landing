import { defineField, defineType, defineArrayMember } from 'sanity'

export const courseSectionSchemaType = defineType({
  name: 'courseSection',
  title: 'Sección: Contenido del curso / guía',
  type: 'document',
  fields: [
    defineField({ name: 'badge', title: 'Etiqueta eyebrow', type: 'string' }),
    defineField({ name: 'titulo', title: 'Título', type: 'string' }),
    defineField({ name: 'parrafo', title: 'Párrafo introductorio', type: 'text', rows: 3 }),
    defineField({
      name: 'modulos',
      title: 'Módulos de la guía',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'titulo', title: 'Título del módulo', type: 'string' }),
          defineField({ name: 'descripcion', title: 'Descripción', type: 'text', rows: 2 }),
        ],
        preview: { select: { title: 'titulo' } },
      })],
    }),
    defineField({ name: 'cardBadge', title: 'Badge de la tarjeta (ej: Acceso gratuito)', type: 'string' }),
    defineField({ name: 'cardTitulo', title: 'Título de la tarjeta', type: 'string' }),
    defineField({
      name: 'itemsIncluidos',
      title: 'Items incluidos (lista en la tarjeta)',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({ name: 'textoCTA', title: 'Texto del botón CTA', type: 'string' }),
    defineField({ name: 'textoSecundario', title: 'Texto secundario bajo el botón', type: 'string' }),
    defineField({ name: 'socialProof', title: 'Prueba social (estrellas y número)', type: 'string' }),
  ],
})
