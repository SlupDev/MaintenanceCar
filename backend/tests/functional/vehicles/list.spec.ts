import { test } from '@japa/runner'

test.group('Vehicles list', () => {
  test('Get a list of vehicles', async ({ client }) => {
    const response = await client.get('/vehicle')

    response.assertStatus(200)

    response.assertBodyContains([])
    
    response.assertBody((body: any) => {
      if (!Array.isArray(body)) {
        throw new Error('Expected array')
      }
    })
  })
})