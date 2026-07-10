import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemas } from './src/sanity/schemas'
import { projectId, dataset } from './src/sanity/env'

const singletonTypes = new Set(['hero', 'globalColors'])

export default defineConfig({
  name: 'robotedge-studio',
  title: 'RobotEdge — Panel de contenido',
  projectId,
  dataset,
  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido del sitio')
          .items([
            S.listItem()
              .title('Hero (sección principal)')
              .id('hero')
              .child(S.document().schemaType('hero').documentId('hero')),
            S.listItem()
              .title('Colores globales del texto')
              .id('globalColors')
              .child(S.document().schemaType('globalColors').documentId('globalColors')),
            S.divider(),
            S.listItem()
              .title('Testimonios')
              .child(S.documentTypeList('testimonial').title('Testimonios')),
            S.listItem()
              .title('Preguntas frecuentes (FAQ)')
              .child(S.documentTypeList('faqItem').title('Preguntas frecuentes')),
          ]),
    }),
  ],

  schema: { types: schemas },

  document: {
    actions: (prev, { schemaType }) =>
      singletonTypes.has(schemaType)
        ? prev.filter(({ action }) => action !== 'delete' && action !== 'unpublish')
        : prev,
    newDocumentOptions: (prev) =>
      prev.filter((t) => !singletonTypes.has(t.templateId)),
  },
})
