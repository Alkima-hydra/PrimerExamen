import { Router } from 'express';
const router = Router();
import { createProduct, getProducts, updateProduct, deleteProduct } from '../controllers/productController.js';
import { body, param } from 'express-validator';

// Validations
const productValidation = [
  body('nombre').notEmpty().withMessage('Nombre es obligatorio'),
  body('precio').isFloat({ min: 0 }).withMessage('Precio debe ser positivo'),
  body('categoria').notEmpty().withMessage('Categoria es obligatorio')
];

// ID Validation
const idValidation = [
  param('id').isMongoId().withMessage('Formato de ID inválido')
];

// Product Routes
router.post('/productos', productValidation, createProduct);
router.get('/productos', getProducts);
router.put('/productos/:id', [...idValidation, ...productValidation], updateProduct);
router.delete('/productos/:id', idValidation, deleteProduct);

export default router;