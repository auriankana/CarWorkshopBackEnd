 // Impoter la fonction route

 import { Router } from "express"
import { utilisateurList, addUtilisateur, updateUtilisateur, deleteUtilisateur, nombrePagesUtilisateurs } from "../controllers/UtilisateurController.js"
import utilisateurRules from "../Validation/utilisateurValidation.js"
import { verifierToken } from "../Authentification/verifierToken.js"
import autoriser from "../Authentification/autorisation.js"

 export const router = Router()

 // Comme tous les elements ont le meme utilisateur au debut de leurs chemins on ne le precise pas
 router.get("/",verifierToken, autoriser(['admin','manager']),  utilisateurList)
 .get("/",verifierToken,nombrePagesUtilisateurs)
 .post("/",verifierToken, autoriser(['admin','manager']), utilisateurRules, addUtilisateur)
 .put("/:id",verifierToken, autoriser(['admin','manager']), utilisateurRules,updateUtilisateur)
 .delete("/:id",verifierToken, autoriser(['admin','manager']), deleteUtilisateur)