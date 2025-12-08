import Vehicle from '#models/vehicle'
import type { HttpContext } from '@adonisjs/core/http'

export default class VehiclesController {
  /**
   * Display a list of resource
   */
  async index({ /* response */ }: HttpContext) {
    /* const vehicle  = await Vehicle.all()
    
    return response.ok(vehicle) */
    return [
      {
        id: 1,
        name: "test"
      },
      {
        id: 2,
        name: "test"
      },
      {
        id: 3,
        name: "test"
      },
      {
        id: 4,
        name: "test"
      },
    ]
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}