import Docs from 'api/core/docs'

export const swaggerDefinition = {
  openapi: '3.0.3',
  info: {
    version: '1.0.0',
    title: 'Node-API',
    description: 'Node API',
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  servers: [
    {
      url: '{baseURL}',
      description: 'Local server',
      variables: {
        baseURL: {
          default: `http://localhost:${process.env.PORT}`,
        },
      },
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  paths: Docs,
}
