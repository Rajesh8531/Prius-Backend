import express from 'express'
import { createSpecialization, deleteSpecialization, getSpecializations, updateSpecialization } from '../controllers/specialization-controller'



const router = express.Router({mergeParams:true})

router.post('/',createSpecialization)
router.get('/',getSpecializations)
router.put('/:specializationId',updateSpecialization)
router.delete('/:specializationId',deleteSpecialization)

export default router