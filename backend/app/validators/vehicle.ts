import vine from '@vinejs/vine'
import { EngineType } from '../enum/engineType.js'

export const createVehicleValidator = vine.compile(
    vine.object({
        brand: vine.string().trim(),
        model: vine.string().trim(),
        yearOfRegistration: vine.string().trim(),
        currentMileage: vine.number(),
        registrationNumber: vine.string().trim(),
        vehicleIdentificationNumber: vine.string().trim(),
        engineType: vine.enum(EngineType),
        power: vine.string().trim(),
        color: vine.string().trim(),
        dateOfPurchase: vine.date(),
        createdAt: vine.date(),
        updatedAt: vine.date(),
    })
)










