import { defineField, defineType } from 'sanity'

export const globalColorsSchema = defineType({
  name: 'globalColors',
  title: 'Colores globales del texto',
  type: 'document',
  fields: [
    defineField({
      name: 'colorPrincipal',
      title: 'Color de texto principal',
      type: 'string',
      description: 'Color de títulos y textos importantes. Introduce el código hex. Ej: #F0F4F8',
      validation: (r) => r.required().regex(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/, {
        name: 'hex',
        invert: false,
      }).error('Debe ser un código de color hex válido, ej: #F0F4F8'),
    }),
    defineField({
      name: 'colorSecundario',
      title: 'Color de texto secundario',
      type: 'string',
      description: 'Color de párrafos y textos descriptivos. Ej: #5A7A95',
      validation: (r) => r.required().regex(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/, {
        name: 'hex',
        invert: false,
      }).error('Debe ser un código de color hex válido, ej: #5A7A95'),
    }),
    defineField({
      name: 'colorAcento',
      title: 'Color de acento (botones y destacados)',
      type: 'string',
      description: 'Color principal de la marca. Se aplica en botones, líneas y texto destacado. Ej: #148AFF',
      validation: (r) => r.required().regex(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/, {
        name: 'hex',
        invert: false,
      }).error('Debe ser un código de color hex válido, ej: #148AFF'),
    }),
  ],
})
