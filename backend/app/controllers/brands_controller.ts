import Brand from '#models/brand'
import type { HttpContext } from '@adonisjs/core/http'

export default class BrandsController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const brand = await Brand.all()

    return response.ok(brand)
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    try {
          const paylod = request.only([
            // ----
          ])
    
          const brand = await Brand.create(paylod)
    
          return response.created(brand)
        } catch (error) {
          console.error(error)
          return response.internalServerError({
            message: 'Erreur lors de la création du Marque',
          })
        }
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const brand = await Brand.find(params.id)
    
        if (!brand) {
          return response.notFound({
            message: 'Marque introuvable'
          })
        }
    
        return response.ok(brand)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    try {
          const brand = await Brand.find(params.id)
    
          if (!brand) {
            return response.notFound({
              message: 'Marque introuvable'
            })
          }
    
          const paylod = request.only([
            // ...
          ])
    
          brand.merge(paylod)
          await brand.save()
    
          return response.ok(brand)
        } catch (error) {
          console.error(error)
          return response.internalServerError({
            message: 'Erreur lors de la mise à jour du Marque',
          })
        }
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    try {
      const brand = await Brand.find(params.id)

      if (!brand) {
        return response.notFound({
          message: 'Marque introuvable',
        })
      }

      await brand.delete()

      return response.ok({
        message: 'Marque supprimé avec succès',
      })
    } catch (error) {
      console.error(error)
      return response.internalServerError({
        message: 'Erreur lors de la suppression du Marque',
      })
    }
  }
}