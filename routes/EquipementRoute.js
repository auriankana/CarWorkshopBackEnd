//Import de la fonction route
import { Router } from "express";

//Import des controllers pour la creation des routes
import { liste_equipements, add_equipement, update_equipement, remove_equipement } from "../controllers/Equipements.js";

export const routerEquipement = Router()

routerEquipement
.get("/", liste_equipements)
.post("/", add_equipement)
.put("/:id", update_equipement)
.delete("/:id", remove_equipement);


