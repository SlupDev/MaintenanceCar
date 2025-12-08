import factory from '@adonisjs/lucid/factories'
import Vehicle from '#models/vehicle'
import { EngineType } from '../../app/enum/engineType.js'
import { DateTime } from 'luxon'

export const VehicleFactory = factory
  .define(Vehicle, async ({ faker }) => {
    return {
      brand: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      yearOfRegistration: faker.date.past().getFullYear().toString(),
      currentMileage: faker.number.int({ min: 0, max: 300000 }),
      registrationNumber: faker.vehicle.vrm(),
      vehicleIdentificationNumber: faker.vehicle.vin(),
      engineType: faker.helpers.arrayElement([
        EngineType.DIESEL,
        EngineType.PETROL,
        EngineType.HYBRID,
        EngineType.ELECTRIC,
      ]),
      power: faker.number.int({ min: 70, max: 600 }).toString(),
      color: faker.vehicle.color(),
      dateOfPurchase: DateTime.fromJSDate(faker.date.past()),
    }
  })
  .build()