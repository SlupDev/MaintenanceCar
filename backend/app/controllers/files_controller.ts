import File from "#models/file";
import type { HttpContext } from '@adonisjs/core/http'

export default class FilesController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const file = await File.all()

    return response.ok(file)
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    try {
          const paylod = request.only([
            // ----
          ])
    
          const file = await File.create(paylod)
    
          return response.created(file)
        } catch (error) {
          console.error(error)
          return response.internalServerError({
            message: 'Erreur lors de la création du Fichier',
          })
        }
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const file = await File.find(params.id)
    
        if (!file) {
          return response.notFound({
            message: 'Fichier introuvable'
          })
        }
    
        return response.ok(file)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    try {
          const file = await File.find(params.id)
    
          if (!file) {
            return response.notFound({
              message: 'Fichier introuvable'
            })
          }
    
          const paylod = request.only([
            // ...
          ])
    
          file.merge(paylod)
          await file.save()
    
          return response.ok(file)
        } catch (error) {
          console.error(error)
          return response.internalServerError({
            message: 'Erreur lors de la mise à jour du Fichier',
          })
        }
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    try {
      const file = await File.find(params.id)

      if (!file) {
        return response.notFound({
          message: 'Fichier introuvable',
        })
      }

      await file.delete()

      return response.ok({
        message: 'Fichier supprimé avec succès',
      })
    } catch (error) {
      console.error(error)
      return response.internalServerError({
        message: 'Erreur lors de la suppression du Fichier',
      })
    }
  }
}