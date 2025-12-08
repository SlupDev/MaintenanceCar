import factory from '@adonisjs/lucid/factories'
import User from '#models/user'
import { VehicleFactory } from './vehicle_factory.js'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    return {
      fullName: faker.person.fullName(),
      email: faker.internet.email(),
      password: 'password',
      // password: faker.internet.password
    }
  })
  .relation('vehicles', () => VehicleFactory)
  
  .build()