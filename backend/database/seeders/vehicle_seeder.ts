import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { VehicleFactory } from '#database/factories/vehicle_factory'

export default class extends BaseSeeder {
  async run() {
    /* await Vehicle.createMany([
      {
        brand: "",
        model: "",
        yearOfRegistration: "",
        currentMileage: 0,
        registrationNumber: "",
        vehicleIdentificationNumber: "",
        engineType: EngineType.ELECTRIC,
        power: "",
        color: "",
        dateOfPurchase: DateTime.fromISO('2025-01-01')
      },
    ]) */
    await VehicleFactory.createMany(10)
  }
}