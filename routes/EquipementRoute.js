//Import de la fonction route
import { Router } from "express";

//Import des controllers pour la creation des routes
import { liste_equipements } from "../controllers/Equipements.js";

const router = Router()

router
  .get("/", liste_equipements)
  .post("/", add_equipement)
   .put("/:id", update_equipement)
   .delete("/:id", remove_equipement);
    export default router
