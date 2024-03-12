import {body, param} from  "express-validator"

//Regex pour le nom et prenom
const nameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/

//On peut aussi utiliser une regex pour le mot de passe
const mdpRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/

const utilisateurRules = [
    body('nom').matches(nameRegex).withMessage("le nom n'est pas conforme"),
    body('prenom').matches(nameRegex).withMessage("le prenom n'est pas conforme"),
    body('email').exists().withMessage('email obligatoire').isEmail().withMessage("ceci n'est pas un email"),
    body('mot_de_passe').isString()
        .isLength({ min: 8 }).withMessage('au moins 8 caracteres')
        .matches(/\d/).withMessage('au moins un chiffre')
        .matches(/a-z/).withMessage('au moins une lettre minuscule')
        .matches(/A-Z/).withMessage('au moins une lettre majuscule')
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('au moins un caractere special'),
    //body('date_de_naissance').isDate({ delimiters: '-' }).withMessage('la date est incorrecte'),
    param('id').optional().isInt({ min: 1 }).withMessage("l'id doit etre un entier positif")

]

export default utilisateurRules