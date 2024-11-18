import express from 'express'
import { createLearner, getLearner, getLearners } from '../controllers/learner-controller'



const router = express.Router()

router.get('/',getLearners)
router.get('/:learnerId',getLearner)
router.post('/',createLearner)


export default router