import { body, check, param } from "express-validator";

const Resrvation_val = [
    body('prix').notEmpty().withMessage("le prix doit etre un entier positif"),
    body('Mode_paiement').notEmpty().withMessage("Le champ 'Mode_paiement' ne peut pas être vide"),
    body('date_paiement').optional().matches(/^\d{2}-\d{2}-\d{2}$/).withMessage('La date doit être au format DD-MM-YY'),
    body('idfacturation').optional().isInt({ min: 1 }).withMessage("L'ID de la facturation doit être un entier positif"),
    param('id').optional().isInt({ min: 1 }).withMessage("l'id doit etre un entier positif")
]

export default Resrvation_val


