import { Entity, Schema } from 'redis-om'

import client from '../om/client.js'

class Collaborator extends Entity {}

const collaboratorSchema = new Schema(Collaborator, {
  userId: { type: 'number' },
  username: { type: 'string' },
  userDisplayName: { type: 'string' },
  projectId: { type: 'number' },
  projectDisplayName: { type: 'string' },
})

export const collaboratorRepository = client.fetchRepository(collaboratorSchema)

await collaboratorRepository.createIndex()
