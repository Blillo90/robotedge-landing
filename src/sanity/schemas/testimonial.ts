import { defineField, defineType } from 'sanity'

export const testimonialSchema = defineType({
  name: 'testimonial',
  title: 'Testimonio',
  type: 'document',
  preview: {
    select: { title: 'nombre', subtitle: 'titulo' },
  },
  fields: [
    defineField({
      name: 'orden',
      title: 'Orden de aparición',
      type: 'number',
      description: 'Número que define el orden en que aparece en la web. El 1 sale primero.',
      validation: (r) => r.required().integer().positive(),
    }),
    defineField({
      name: 'titulo',
      title: 'Titular de la reseña',
      type: 'string',
      description: 'El titular corto que resume la opinión. Ej: "RobotEdge funciona"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'cita',
      title: 'Texto completo de la reseña',
      type: 'text',
      rows: 5,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'nombre',
      title: 'Nombre del alumno',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'rol',
      title: 'Rol o descripción del alumno',
      type: 'string',
      description: 'Ej: "Alumno de RobotEdge" o "Trader manual reconvertido · Madrid"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'iniciales',
      title: 'Iniciales (para el avatar)',
      type: 'string',
      description: 'Máximo 2 letras. Ej: BA para Bernardo Aguayo.',
      validation: (r) => r.required().max(2),
    }),
  ],
})
