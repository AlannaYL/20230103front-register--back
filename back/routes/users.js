import { Router } from 'express'
import content from '../middleware/content.js'
import { register } from '../controllers/users.js'

const router = Router()

// 'application/json'進入 content.js = (type)
router.post('/', content('application/json'), register)

export default router
