import factory from '@adonisjs/lucid/factories'
import Model from '#models/model'

export const ModelFactory = factory
  .define(Model, async ({ faker }) => {
    return {}
  })
  .build()