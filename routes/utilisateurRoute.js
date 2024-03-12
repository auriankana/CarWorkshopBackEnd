 // Impoter la fonction route

 import { Router } from "express"
import { utilisateurList, addUtilisateur, updateUtilisateur, deleteUtilisateur } from "../controllers/UtilisateurController.js"
import utilisateurRules from "../Validation/utilisateurValidation.js"
import { verifierToken } from "../Authentification/verifierToken.js"

 export const router = Router()

 // Comme tous les elements ont le meme utilisateur au debut de leurs chemins on ne le precise pas
 router.get("/",verifierToken, autoriser(['admin','manager','mechanic']),  utilisateurList)
 .post("/",verifierToken, autoriser(['admin','manager']), utilisateurRules, addUtilisateur)
 .put("/:id",verifierToken, autoriser(['admin','manager']), utilisateurRules,updateUtilisateur)
 .delete("/:id",verifierToken, autoriser(['admin']), deleteUtilisateur)