import express from 'express'
import { createTopic, deleteTopic, getTopics, updateTopic } from '../controllers/topic-controller'

const router = express.Router({mergeParams:true})

router.post('/',createTopic)
router.get('/',getTopics)
router.put('/:topicId',updateTopic)
router.delete('/:topicId',deleteTopic)

export default router