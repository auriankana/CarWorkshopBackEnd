import { body, param } from "express-validator";
const roleRules = [
    body('titre').notEmpty().withMessage("le titre ne peut pas etre vide"),
]

export default roleRules