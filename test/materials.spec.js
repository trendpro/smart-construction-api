const build = require('../app')

describe('Materials CRUD API', () => {
  const createMaterial = async (fastify) => {
    const payload = {
      "name": "demo #2",
      "color": "#ff2",
      "volume": 100,
      "cost": 120,
      "deliveryDate": "12/12/2021"
    }

    await fastify.inject({
      method: 'POST',
      url: '/v1/materials',
      payload,
    })
  }

  const fetchFirstMaterialCreated = async (fastify) => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/v1/materials'
    })

    const results = JSON.parse(response.body)
    return results[0]
  }

  test('renders /v1/materials with empty array', async () => {
    // FIXME: building the app in every single test is not a good idea
    const fastify = await build()
    const response = await fastify.inject({
      method: 'GET',
      url: '/v1/materials'
    })
    expect(response.statusCode).toEqual(200)
  })

  test('should create material', async () => {
    // FIXME: building the app in every single test is not a good idea
    const fastify = await build()

    await createMaterial(fastify)

    const createdMaterial = await fetchFirstMaterialCreated(fastify)

    expect(createdMaterial.id).toBeDefined()
  })

  test('should update material', async () => {
    // FIXME: building the app in every single test is not a good idea
    const fastify = await build()

    await createMaterial(fastify)

    const createdMaterial = await fetchFirstMaterialCreated(fastify)

    await fastify.inject({
      method: 'PUT',
      url: `/v1/materials/${createdMaterial.id}`,
      payload: {id: createdMaterial.id, name: 'updated'}
    })

    const updatedMaterial = await fetchFirstMaterialCreated(fastify)

    expect(updatedMaterial.name).toEqual('updated')
  })

  test('should delete a material', async () => {
    // FIXME: building the app in every single test is not a good idea
    const fastify = await build()

    await createMaterial(fastify)

    const createdMaterial = await fetchFirstMaterialCreated(fastify)

    await fastify.inject({
      method: 'DELETE',
      url: `/v1/materials/${createdMaterial.id}`
    })

    const updatedMaterial = await fetchFirstMaterialCreated(fastify)

    expect(updatedMaterial).toBeDefined()
  })
});