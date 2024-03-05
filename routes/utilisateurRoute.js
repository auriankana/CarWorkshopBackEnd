 // Impoter la fonction route

 import { Router } from "express"
import { utilisateurList, addUtilisateur, updateUtilisateur, deleteUtilisateur } from "../controllers/UtilisateurController.js"


 export const router = Router()

 // Comme tous les elements ont le meme utilisateur au debut de leurs chemins on ne le precise pas
 router.get("/", utilisateurList)
 .post("/",addUtilisateur)
 .put("/:id",updateUtilisateur)
 .delete("/:id",deleteUtilisateur)