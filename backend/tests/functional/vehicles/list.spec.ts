import Vehicle from '#models/vehicle'
import { test } from '@japa/runner'

test.group('Vehicles list', () => {
  test('get a list of vehicles', async ({ client }) => {
    const response = await client.get('/vehicle')

    response.assertStatus(200)
    response.assertBody(Vehicle)
  })
})