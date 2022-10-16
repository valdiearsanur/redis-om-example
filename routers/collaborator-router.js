import { Router } from 'express'

import { collaboratorRepository } from '../repo/collaborator.js'

export const router = Router()

router.post('/', async (req, res) => {
  const collaborator = await collaboratorRepository.createAndSave(req.body)

  res.send(collaborator)
})

router.get('/:id', async (req, res) => {
  const collaborator = await collaboratorRepository.fetch(req.params.id)
  res.send(collaborator)
})

router.put('/:id', async (req, res) => {
  const collaborator = await collaboratorRepository.fetch(req.params.id)

  collaborator.userid = req.body.userid ?? null
  collaborator.username = req.body.username ?? null
  collaborator.userDisplayName = req.body.userDisplayName ?? null
  collaborator.projectId = req.body.projectId ?? null
  collaborator.projectDisplayName = req.body.projectDisplayName ?? null

  await collaboratorRepository.save(collaborator)

  res.send(collaborator)
})

router.delete('/:id', async (req, res) => {
  await collaboratorRepository.remove(req.params.id)

  res.send({ id: req.params.id })
})
