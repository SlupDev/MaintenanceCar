import Model from '#models/model'
import type { HttpContext } from '@adonisjs/core/http'

export default class ModelsController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const model = await Model.all()

    return response.ok(model)
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    try {
          const paylod = request.only([
            // ----
          ])
    
          const model = await Model.create(paylod)
    
          return response.created(model)
        } catch (error) {
          console.error(error)
          return response.internalServerError({
            message: 'Erreur lors de la création du Modele',
          })
        }
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const model = await Model.find(params.id)
    
        if (!model) {
          return response.notFound({
            message: 'Modele introuvable'
          })
        }
    
        return response.ok(model)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    try {
          const model = await Model.find(params.id)
    
          if (!model) {
            return response.notFound({
              message: 'Modele introuvable'
            })
          }
    
          const paylod = request.only([
            // ...
          ])
    
          model.merge(paylod)
          await model.save()
    
          return response.ok(model)
        } catch (error) {
          console.error(error)
          return response.internalServerError({
            message: 'Erreur lors de la mise à jour du Modele',
          })
        }
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    try {
      const model = await Model.find(params.id)

      if (!model) {
        return response.notFound({
          message: 'Modele introuvable',
        })
      }

      await model.delete()

      return response.ok({
        message: 'Modele supprimé avec succès',
      })
    } catch (error) {
      console.error(error)
      return response.internalServerError({
        message: 'Erreur lors de la suppression du Modele',
      })
    }
  }
}