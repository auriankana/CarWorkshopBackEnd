//Import de la fonction route
import { Router } from "express";

//Import des controllers pour la creation des routes
import { add_paiement, liste_Paiement, remove_paiement, update_paiement } from "../controllers/controllers_paiement.js";

const router = Router()

router
    .get("/", liste_Paiement)
    .post("/", add_paiement)
    .put("/:id", update_paiement)
    .delete("/:id", remove_paiement);
    
    export default router