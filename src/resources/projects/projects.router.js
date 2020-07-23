import { Router } from 'express'
//import { } from './projects.controllers'

const controllers = (req, res) => {
    res.send({ message: 'Hello' })
}

const router = Router()

// api/projects
router.route('/')
    .get(controllers)
    .post(controllers)

// api/projects/:id
router.route('/:id')
    .get(controllers)
    .put(controllers)
    .delete(controllers)

export default router