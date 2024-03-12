import { Utilisateur } from "../models/relation.js";

//Importer le module de hachage
import bcrypt from 'bcryptjs'

//Importer le module qui genere la clef
import jwt from 'jsonwebtoken'

//Ajouter les validations
import { validationResult } from "express-validator";

export const login = async (req, res) => {
    
    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    //Les informations de connexion

    const { email, motDePasse } = req.body

    //Verification de l'email
    if (!email) return res.status(404).json({ message: "L'email est incorrect" })

    //Chercher la personne dans la base de donnees

    try {
        const utilisateur = await Utilisateur.findOne({ where: { email } })

        //Verifier la presence de cette personne dans la base de donnees
        if (!utilisateur) return res.status(404).json({ message: "La personne n'existe pas!" })
        //Verification du mot de passe

        const mdpCorrect = bcrypt.compareSync(motDePasse, utilisateur.motDePasse)

        if (!mdpCorrect) return res.status(401).json({ message: "Mot de passe incorrect" })

        //Creation de la clef d'access
        const payload = { id: utilisateur.idUtilisateur } // donnees de l'utilisateur 
        const token = jwt.sign(payload, process.env.SECRET_KEY)

        res.status(200).json({ data: utilisateur, token })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}