import Vehicle from '#models/vehicle'
import type { HttpContext } from '@adonisjs/core/http'

export default class VehiclesController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const vehicle  = await Vehicle.all()
    
    return response.ok(vehicle);
    /* return [
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
    ] */
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    try {
      const paylod = request.only([
        // ----
      ])

      const vehicle = await Vehicle.create(paylod)

      return response.created(vehicle)
    } catch (error) {
      console.error(error)
      return response.internalServerError({
        message: 'Erreur lors de la création du véhicule',
      })
    }
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const vehicle = await Vehicle.find(params.id)

    if (!vehicle) {
      return response.notFound({
        message: 'Véhicule introuvable'
      })
    }

    return response.ok(vehicle)
  }

  /**
   * Edit individual record
   */
  async update({ params, request, response }: HttpContext) {
    try {
      const vehicle = await Vehicle.find(params.id)

      if (!vehicle) {
        return response.notFound({
          message: 'Véhicule introuvable'
        })
      }

      const paylod = request.only([
        // ...
      ])

      vehicle.merge(paylod)
      await vehicle.save()

      return response.ok(vehicle)
    } catch (error) {
      console.error(error)
      return response.internalServerError({
        message: 'Erreur lors de la mise à jour du véhicule',
      })
    }
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    try {
      const vehicle = await Vehicle.find(params.id)

      if (!vehicle) {
        return response.notFound({
          message: 'Véhicule introuvable',
        })
      }

      await vehicle.delete()

      return response.ok({
        message: 'Véhicule supprimé avec succès',
      })
    } catch (error) {
      console.error(error)
      return response.internalServerError({
        message: 'Erreur lors de la suppression du véhicule',
      })
    }
  }
}