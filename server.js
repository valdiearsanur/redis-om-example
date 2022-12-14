import 'dotenv/config'

import express from 'express'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'
import * as dotenv from 'dotenv';
import { router as collaboratorRouter } from './routers/collaborator-router.js'
import { router as searchRouter } from './routers/search-router.js'

dotenv.config();

/* create an express app and use JSON */
const PORT = process.env.PORT || 8080;

const app = new express()
app.use(express.json())

/* bring in some routers */
app.use('/collaborator', collaboratorRouter)
app.use('/collaborators', searchRouter)

/* set up swagger in the root */
const swaggerDocument = YAML.load('api.yaml')
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

/* start the server */
app.listen(PORT)
