import express from 'express'
import { createCategory, deleteCategory, getCategories, updateCategory } from '../controllers/category-controller'




const router = express.Router({mergeParams:true})

router.post('/',createCategory)
router.get('/',getCategories)
router.put('/:categoryId',updateCategory)
router.delete('/:categoryId',deleteCategory)

export default router