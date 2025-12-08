import { UserFactory } from '#database/factories/user_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    // 5 Utilisateur avec 2 véhicules
    await UserFactory
      .with("vehicles", 2)
      .createMany(5)

    await UserFactory
      .merge({ email: 'admin@exemple.com', fullName: 'AdminUser' })
      .with('vehicles', 3)
      .create()
  }
}