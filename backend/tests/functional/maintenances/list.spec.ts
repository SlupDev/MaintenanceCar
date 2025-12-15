import Maintenance from '#models/maintenance'
import { test } from '@japa/runner'

test.group('Maintenances list', () => {
  test('get a list of Maintenances', async ({ client }) => {
    const response = await client.get('/Maintenance')

    response.assertStatus(200)
    response.assertBody(Maintenance)
  })
})