import Model from '#models/model'
import { test } from '@japa/runner'

test.group('Models list', () => {
  test('get a list of models', async ({ client }) => {
    const response = await client.get('/model')

    response.assertStatus(200)
    response.assertBody(Model)
  })
})