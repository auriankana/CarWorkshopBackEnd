import { body, check, param } from "express-validator";

const Resrvation_val = [
    body('modele').notEmpty().withMessage("Le modele ne peut pas être vide"),
    body('marque').notEmpty().withMessage("La marque ne peut pas être vide"),
    body('electrique').notEmpty().withMessage("Le champ 'électrique' ne peut pas être vide"),
    body('probleme').optional().isLength({ min: 20 }).withMessage('La description du problème doit contenir au moins 20 caractères'),
    body('date').optional().matches(/^\d{2}-\d{2}-\d{2}$/).withMessage('La date doit être au format DD-MM-YY'),
    body('heure').optional().matches(/^([01][0-9]|2[0-3]):[0-5][0-9]$/).withMessage('L\'heure doit être au format HH:MM'),
    body('idUtilisateur').optional().isInt({ min: 1 }).withMessage("L'ID de l'utilisateur doit être un entier positif"),
    param('id').optional().isInt({ min: 1 }).withMessage("l'id doit etre un entier positif")
]

export default Resrvation_val


