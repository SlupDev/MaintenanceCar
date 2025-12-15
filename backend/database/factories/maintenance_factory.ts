import factory from '@adonisjs/lucid/factories'
import Maintenance from '#models/maintenance'

export const MaintenanceFactory = factory
  .define(Maintenance, async ({ faker }) => {
    return {}
  })
  .build()