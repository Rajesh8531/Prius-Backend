import express from 'express'
import { createQuestion,getQuestions} from '../controllers/question-controller'




const router = express.Router({mergeParams:true})

router.post('/',createQuestion)
router.get('/',getQuestions)
// router.put('/:topicId',updateTopic)
// router.delete('/:topicId',deleteTopic)

export default router