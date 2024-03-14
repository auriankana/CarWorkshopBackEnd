//Import de la fonction route
import { Router } from "express";

//Import des controllers pour la creation des routes
import { liste_equipements, add_equipement, update_equipement, remove_equipement } from "../controllers/Equipements.js";
import { verifierToken } from "../Authentification/verifierToken.js";
import autoriser from "../Authentification/autorisation.js"
import equipementRules from "../Validation/Equipement_val.js";


export const routerEquipement = Router()

routerEquipement
.get("/",verifierToken, autoriser(['admin','manager','mechanic']), liste_equipements)
.post("/",verifierToken, autoriser(['admin','manager']), equipementRules, add_equipement)
.put("/:id",verifierToken, autoriser(['admin','manager']), equipementRules, update_equipement)
.delete("/:id",verifierToken, autoriser(['admin','manager']), remove_equipement);


