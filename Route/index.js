import express from "express"
import { 
    getProducts,
    showProductById,
    storeProduct,
    updateProduct,
    deleteProduct
 } 
 from "../Controllers/ProductController.js"

const router = express.Router()

//! === L I S T ===
router.get('/', getProducts)

//! === S H O W ===
router.get('/:id', showProductById)

//! === S T O R E ===
router.post('/', storeProduct)

//! === U P D A T E ===
router.patch('/:id', updateProduct)

router.delete('/:id', deleteProduct)

export default router