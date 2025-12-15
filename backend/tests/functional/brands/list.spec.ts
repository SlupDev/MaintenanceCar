import Brand from '#models/brand'
import { test } from '@japa/runner'

test.group('Brands list', () => {
  test('get a list of brands', async ({ client }) => {
    const response = await client.get('/brand')

    response.assertStatus(200)
    response.assertBody(Brand)
  })
})