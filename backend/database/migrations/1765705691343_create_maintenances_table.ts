import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'maintenances'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('vehicle_id')
        .unsigned()
        .references('id')
        .inTable('vehicles')
        .onDelete('CASCADE')
        .notNullable()

      table.string('title').notNullable()
      table.text('description', 'longtext')
      table.date('maintenance_date').notNullable()
      table.integer('mileage_at_time', 6)
      table.string('mechanic_name', 50)
      table.float('total_cost', 8, 2)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}