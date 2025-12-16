import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'


import User from '#models/user'
import Vehicle from '#models/vehicle'

export default class Maintenance extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number 
  
  @column()
  declare vehicleId: number

  @column({})
  declare title: string

  @column({})
  declare description: string

  @column.date({})
  declare maintenanceDate: DateTime

  @column({})
  declare mileageAtTime: number   // MileageAtTimeOfMaintenance

  @column({})
  declare mechanicName: string
  
  @column({})
  declare totalCost: number
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Vehicle)
  declare vehicle: BelongsTo<typeof Vehicle>
}