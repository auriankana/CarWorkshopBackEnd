import { body} from "express-validator";

const facturationRules= [
    body('prix').notEmpty().withMessage("le prix doit etre un entier positif"),
    body('description').optional().isLength({ min: 20 }).withMessage('la description doit contenir au moins 20 caracteres'),
    body('idUtilisateur').optional().isInt({ min: 1 }).withMessage("L'ID de l'utilisateur doit être un entier positif"),
    body('idReservation').optional().isInt({ min: 1 }).withMessage("l'id de la reservation doit etre un entier positif"),
    body('id').optional().isInt({ min: 1 }).withMessage("l'id  doit etre un entier positif")

]

export default facturationRules


