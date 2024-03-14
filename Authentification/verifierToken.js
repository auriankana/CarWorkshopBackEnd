// Deuxieme etape verifier si il est connecte

//Importer jwt
import jwt from 'jsonwebtoken'

export const verifierToken = (req, res, next) => {
    //Recuperation du token
    const bearerToken = req.headers.authorization

    //Verification de la presence du token
    if (!bearerToken) return res.status(401).json({ message: "Mais vous etes pas connecte!" })

    //Recuperer le token sans la partie Bearer
    const token = bearerToken.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
        if (err) return res.status(401).json({ message: err.message })

        req.idUtilisateur = payload.id
        console.log("voici verif lidetifiant :",payload.id)
        next()
    })

}

