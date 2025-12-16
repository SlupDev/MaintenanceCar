import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import Maintenance from '#models/maintenance'

export default class File extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare maintenanceId: number | null
  
  @column({})
  declare name: string

  @column({})
  declare link: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Maintenance)
  declare maintenance: BelongsTo<typeof Maintenance>
}