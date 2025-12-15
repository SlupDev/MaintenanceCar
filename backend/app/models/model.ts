import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

import Vehicle from '#models/vehicle'
import Brand from '#models/brand'

export default class Model extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({})
  declare name: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Vehicle)
  declare vehicle: HasMany<typeof Vehicle>

  @belongsTo(() => Brand)
  declare brand: BelongsTo<typeof Brand>
}