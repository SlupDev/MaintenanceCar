import Maintenance from '#models/maintenance'
import type { HttpContext } from '@adonisjs/core/http'

export default class MaintenancesController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const maintenance = await Maintenance.all()

    return response.ok(maintenance)
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    try {
          const paylod = request.only([
            // ----
          ])
    
          const maintenance = await Maintenance.create(paylod)
    
          return response.created(maintenance)
        } catch (error) {
          console.error(error)
          return response.internalServerError({
            message: 'Erreur lors de la création du maintenance',
          })
        }
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const maintenance = await Maintenance.find(params.id)
    
        if (!maintenance) {
          return response.notFound({
            message: 'maintenance introuvable'
          })
        }
    
        return response.ok(maintenance)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    try {
          const maintenance = await Maintenance.find(params.id)
    
          if (!maintenance) {
            return response.notFound({
              message: 'maintenance introuvable'
            })
          }
    
          const paylod = request.only([
            // ...
          ])
    
          maintenance.merge(paylod)
          await maintenance.save()
    
          return response.ok(maintenance)
        } catch (error) {
          console.error(error)
          return response.internalServerError({
            message: 'Erreur lors de la mise à jour du maintenance',
          })
        }
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    try {
      const maintenance = await Maintenance.find(params.id)

      if (!maintenance) {
        return response.notFound({
          message: 'maintenance introuvable',
        })
      }

      await maintenance.delete()

      return response.ok({
        message: 'maintenance supprimé avec succès',
      })
    } catch (error) {
      console.error(error)
      return response.internalServerError({
        message: 'Erreur lors de la suppression du maintenance',
      })
    }
  }
}