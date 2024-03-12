import { body,check,param } from "express-validator";

const departmentRules = [
    body('nom').notEmpty().withMessage("Le nom ne peut pas être vide"),
    body('effectif').isInt({ min: 0 }).withMessage("L'effectif doit être un entier positif"),
    body('idEmplacement').isInt({ min: 1 }).withMessage("L'ID de l'emplacement doit être un entier positif"),
    param('id').optional().isInt({ min: 1 }).withMessage("L'ID doit être un entier positif")
];

export default departmentRules;
