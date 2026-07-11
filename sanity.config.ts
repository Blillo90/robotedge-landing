import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemas } from './src/sanity/schemas'
import { projectId, dataset } from './src/sanity/env'

const singletonTypes = new Set([
  'hero', 'globalColors',
  'problemSection', 'bridgeSection', 'featuresSection', 'whoIsForSection',
  'howItWorksSection', 'aboutSection', 'objectionsSection', 'guiaBannerSection',
  'guiaCTASection', 'beforeAfterSection', 'courseSection', 'glossarySection',
])

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
              S.listItem().title('Hero (sección principal)').id('hero')
              .child(S.document().schemaType('hero').documentId('hero')),
            S.listItem().title('Colores globales del texto').id('globalColors')
              .child(S.document().schemaType('globalColors').documentId('globalColors')),
            S.divider(),
            S.listItem().title('Sección: Problema (comparativa)').id('problemSection')
              .child(S.document().schemaType('problemSection').documentId('problemSection')),
            S.listItem().title('Sección: Cita puente').id('bridgeSection')
              .child(S.document().schemaType('bridgeSection').documentId('bridgeSection')),
            S.listItem().title('Sección: El Método (4 features)').id('featuresSection')
              .child(S.document().schemaType('featuresSection').documentId('featuresSection')),
            S.listItem().title('Sección: Para quién es').id('whoIsForSection')
              .child(S.document().schemaType('whoIsForSection').documentId('whoIsForSection')),
            S.listItem().title('Sección: Transformación (antes/después)').id('beforeAfterSection')
              .child(S.document().schemaType('beforeAfterSection').documentId('beforeAfterSection')),
            S.listItem().title('Sección: Cómo funciona (fases)').id('howItWorksSection')
              .child(S.document().schemaType('howItWorksSection').documentId('howItWorksSection')),
            S.listItem().title('Sección: Quién enseña esto (About)').id('aboutSection')
              .child(S.document().schemaType('aboutSection').documentId('aboutSection')),
            S.listItem().title('Sección: Objeciones frecuentes').id('objectionsSection')
              .child(S.document().schemaType('objectionsSection').documentId('objectionsSection')),
            S.listItem().title('Sección: Banner Guía').id('guiaBannerSection')
              .child(S.document().schemaType('guiaBannerSection').documentId('guiaBannerSection')),
            S.listItem().title('Sección: Contenido del curso / guía').id('courseSection')
              .child(S.document().schemaType('courseSection').documentId('courseSection')),
            S.listItem().title('Sección: Protocolo de calidad (glosario)').id('glossarySection')
              .child(S.document().schemaType('glossarySection').documentId('glossarySection')),
            S.listItem().title('Sección: CTA final guía').id('guiaCTASection')
              .child(S.document().schemaType('guiaCTASection').documentId('guiaCTASection')),
            S.divider(),
            S.listItem().title('Testimonios')
              .child(S.documentTypeList('testimonial').title('Testimonios')),
            S.listItem().title('Preguntas frecuentes (FAQ)')
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
