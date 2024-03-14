//Import de la fonction route
import { Router } from "express";

//Import des controllers pour la creation des routes
import { liste_reservation, add_reservation, update_reservation, remove_reservation } from "../controllers/Reservations.js";
import { verifierToken } from "../Authentification/verifierToken.js";
import autoriser from "../Authentification/autorisation.js"
import reservationRules from "../Validation/Reservation_val.js";


export const routerReservation = Router()

routerReservation
.get("/",verifierToken, autoriser(['admin','manager']), liste_reservation)
.post("/",verifierToken, autoriser(['admin','manager','customer']),reservationRules, add_reservation)
.put("/:id",verifierToken, autoriser(['admin','manager','customer']),reservationRules, update_reservation)
.delete("/:id",verifierToken, autoriser(['admin','manager']),remove_reservation)


