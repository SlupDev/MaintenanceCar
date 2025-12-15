import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

import { EngineType } from '#enums/engineType'
import User from '#models/user'
import Maintenance from '#models/maintenance'
import Model from '#models/model'

export default class Vehicle extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({})
  declare userId: number

  @column({})
  declare yearOfRegistration: string

  @column({})
  declare currentMileage: number

  @column({})
  declare registrationNumber: string

  @column({})
  declare vehicleIdentificationNumber: string

  @column({})
  declare engineType: EngineType

  @column({})
  declare power: string

  @column({})
  declare color: string

  @column.date({})
  declare dateOfPurchase: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Model)
  declare Model: BelongsTo<typeof Model>

  @hasMany(() => Maintenance)
  declare Maintenance: HasMany<typeof Maintenance>
}