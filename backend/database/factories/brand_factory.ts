import factory from '@adonisjs/lucid/factories'
import Brand from '#models/brand'

export const BrandFactory = factory
  .define(Brand, async ({ faker }) => {
    return {}
  })
  .build()