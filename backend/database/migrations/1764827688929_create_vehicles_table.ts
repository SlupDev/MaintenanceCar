import { BaseSchema } from '@adonisjs/lucid/schema'
import { EngineType } from '../../app/enum/engineType.js'

export default class extends BaseSchema {
  protected tableName = 'vehicles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')

      table.string('brand').notNullable()
      table.string('model').notNullable()
      table.string('year_of_registration').notNullable()
      table.integer('current_mileage').notNullable()
      table.string('registration_number').notNullable()
      table.string('vehicle_identification_number').notNullable()
      table.enum('engine_type', Object.values(EngineType)).notNullable()
      table.string('power').notNullable()
      table.string('color').notNullable()
      table.date('date_of_purchase').notNullable()

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}