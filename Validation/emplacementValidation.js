import { body,check,param } from "express-validator";

const emplacementRules = [
    body('adresse').notEmpty().withMessage("L'adresse ne peut pas être vide"),
    body('codePostal').notEmpty().withMessage("Le code postal ne peut pas être vide"),
    body('effectif').isInt({ min: 0 }).withMessage("L'effectif doit être un entier positif"),
    param('id').optional().isInt({ min: 1 }).withMessage("L'ID doit être un entier positif")
];

export default emplacementRules;
