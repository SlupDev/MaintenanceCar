import File from "#models/file";
import { test } from '@japa/runner'

test.group('Files list', () => {
  test('get a list of files', async ({ client }) => {
    const response = await client.get('/file')

    response.assertStatus(200)
    response.assertBody(File)
  })
})