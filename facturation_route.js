//Import de la fonction route
import { Router } from "express";

//Import des controllers pour la creation des routes
import { add_facturation, liste_facturation, remove_facturation, update_facturation } from "../controllers/controllers_Facturaton.js";

const router_fac = Router()

router_fac
    .get("/", liste_facturation)
    .post("/", add_facturation)
    .put("/:id", update_facturation)
    .delete("/:id", remove_facturation);
    
    export default router_fac