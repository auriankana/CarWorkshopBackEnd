import { body, check, param } from "express-validator";

const equipementRules = [
    body('nom').notEmpty().withMessage("le nom ne peut pas etre vide"),
    body('description').optional().isLength({ min: 20 }).withMessage('la description doit contenir au moins 20 caracteres'),
    param('id').optional().isInt({ min: 1 }).withMessage("l'id doit etre un entier positif")
]

export default equipementRules
