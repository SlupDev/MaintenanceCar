/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import BrandsController from '#controllers/brands_controller'
import FilesController from '#controllers/files_controller'
import MaintenancesController from '#controllers/maintenances_controller'
import ModelsController from '#controllers/models_controller'
import VehiclesController from '#controllers/vehicles_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('vehicle', VehiclesController).apiOnly()
router.resource('maintenance', MaintenancesController).apiOnly()
router.resource('file', FilesController).apiOnly()
router.resource('brand', BrandsController).apiOnly()
router.resource('model', ModelsController).apiOnly()
