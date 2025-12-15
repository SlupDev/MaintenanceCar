import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'vehicles'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .integer('model_id')
        .unsigned()
        .references('id')
        .inTable('models')
        .onDelete('CASCADE')

    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
    })
  }
}