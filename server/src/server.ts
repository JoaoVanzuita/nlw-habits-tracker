import cors from '@fastify/cors'
import Fastify from 'fastify'

import { appRoutes } from './routes'
import { Env } from './shared/environment'

const app = Fastify()
const port = Env.SERVER_PORT

app.register(cors)
app.register(appRoutes)

app.listen({
  port,
  host: '0.0.0.0'
})
  .then(() => console.log(`Server online - running on port ${port}`))
  .catch(err => console.log(`An error ocurred - ${err.message}`))