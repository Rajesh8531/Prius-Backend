import express from 'express'
import { createSubTopic, deleteSubTopic, getSubTopics, updateSubTopic } from '../controllers/subTopic-controller'


const router = express.Router({mergeParams:true})

router.post('/',createSubTopic)
router.get('/',getSubTopics)
router.put('/:subTopicId',updateSubTopic)
router.delete('/:subTopicId',deleteSubTopic)

export default router