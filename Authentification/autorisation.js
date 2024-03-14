
//Importer le modele Utilisateur
import { Utilisateur } from '../models/relation.js'

const autoriser = roles => async (req, res, next) => {
    //roles peut etre plusieurs
    //roles=['admin','etudiant']

    //Recuperer l'id a partir de la req
    const id = req.idUtilisateur
console.log("voici lidetifiant :",id)
    //Chercher la personne dans la base de donnees

    try {
        const utilisateur = await Utilisateur.findByPk(id)
        if (!utilisateur) return res.status(404).json({ message: "Cet utilisateur n'existe pas!" })

        //Recuperer le role de la personne 
        const role = await utilisateur.getRole()

        if(!role) return res.status(403).json({ message: "Pas autorise a voir cette route !!" })

        // Verifier le titre de la personne
        if (roles?.includes(role.titre.toLowerCase())) {
            next()
            return
        } else {
            return res.status(403).json({ message: "Vous n'etes pas autorises..." })
        }


    } catch (error) {
        res.status(403).json({ message: error.message })
    }

}

export default autoriser