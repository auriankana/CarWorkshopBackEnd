//Import de la fonction route
import { Router } from "express";

//Import des controllers pour la creation des routes
import { add_facturation, liste_facturation, remove_facturation, update_facturation } from "../controllers/controllers_Facturaton.js";
import { verifierToken } from "../Authentification/verifierToken.js";
import autoriser from "../Authentification/autorisation.js"
import facturationRules from "../Validation/facturation_val.js";


const router_fac = Router()

router_fac
    .get("/",verifierToken, autoriser(['admin','manager','mechanic']), liste_facturation)
    .post("/",verifierToken, autoriser(['admin','manager']), facturationRules, add_facturation)
    .put("/:id",verifierToken, autoriser(['admin','manager']), facturationRules, update_facturation)
    .delete("/:id",verifierToken, autoriser(['admin','manager']), remove_facturation);
    
    export default router_fac