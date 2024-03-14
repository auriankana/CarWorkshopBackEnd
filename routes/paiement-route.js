//Import de la fonction route
import { Router } from "express";

//Import des controllers pour la creation des routes
import { add_paiement, liste_Paiement, remove_paiement, update_paiement } from "../controllers/controllers_paiement.js";
import { verifierToken } from "../Authentification/verifierToken.js";
import autoriser from "../Authentification/autorisation.js"
import paiementRules from "../Validation/paiement_val.js";


const router_paie = Router()

router_paie
    .get("/",verifierToken, autoriser(['admin','manager','mechanic']), liste_Paiement)
    .post("/",verifierToken, autoriser(['admin','manager','customer']),paiementRules, add_paiement)
    .put("/:id",verifierToken, autoriser(['admin','manager']),paiementRules, update_paiement)
    .delete("/:id",verifierToken, autoriser(['admin','manager']), remove_paiement);
    
    export default router_paie