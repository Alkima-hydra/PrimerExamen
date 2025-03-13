import { Router } from 'express';
const router = Router();
import { createUser, getUsers, updateUser, deleteUser } from '../controllers/userController.js';
import { body, param } from 'express-validator';

// Validations
const userValidation = [
  body('nombre').notEmpty().withMessage('Nombre es obligatorio'),
  body('edad').isInt({ min: 0 }).withMessage('La edad debe ser positiva'),
  body('ocupacion').notEmpty().withMessage('Ocupacion es un campo obligatorio')
];

// ID Validation
const idValidation = [
  param('id').isMongoId().withMessage('formato de ID inválido')
];


// User Routes
router.post('/usuarios', userValidation, createUser);
router.get('/usuarios', getUsers);
router.put('/usuarios/:id', [...idValidation, ...userValidation], updateUser);
router.delete('/usuarios/:id', idValidation, deleteUser);

export default router;