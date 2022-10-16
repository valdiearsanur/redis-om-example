import { Router } from 'express'

import { collaboratorRepository } from '../repo/collaborator.js'

export const router = Router()

router.get('/all', async (req, res) => {
  const collaborators = await collaboratorRepository.search().return.all()
  res.send(collaborators)
})

router.get('/by-project-id/:projectId', async (req, res) => {
  const projectId = req.params.projectId
  const collaborators = await collaboratorRepository.search()
    .where('projectId').equals(projectId).return.all()

  res.send(collaborators)
})
