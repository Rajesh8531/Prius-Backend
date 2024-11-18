import express from 'express'
import { allotTest } from '../controllers/allot-test'




const router = express.Router({mergeParams:true})

router.patch('/:subTopicId',allotTest)


export default router