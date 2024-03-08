//Import de la fonction route
import { Router } from "express";

//Import des controllers pour la creation des routes
import { liste_reservation, add_reservation, update_reservation, remove_reservation } from "../controllers/Reservations.js";

export const routerReservation = Router()

routerReservation
.get("/", liste_reservation)
.post("/", add_reservation)
.put("/:id", update_reservation)
.delete("/:id",remove_reservation)


