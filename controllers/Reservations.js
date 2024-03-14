// Amener le modele  avec les relations
import { Reservations } from "../models/relation.js"

//Importer le module suivant dans le controller
import {validationResult } from 'express-validator'


//Controller
//liste des des reservations
export const liste_reservation = async (req, res) => {

    const reservation = await Reservations.findAll()
if (reservation==null){console.log("cest vide")}
    res.status(200).json({ data: reservation, message:'Cella fonctionne parfaitement..'})
}



//Creation d'une reservation
export const add_reservation = async (req, res) => {

    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //Les informations de la nouvelle reservation
    const newreservation = req.body
    // const {idReservations, date, heure, modéle, marque, electrique ou non, description probléme, idUtilisateur } = req.body
    // console.log('new reservation', department)

    try {
        await Reservations.create(newreservation)
        res.status(201).json({ message: "La reservation a ete cree avec succes" })
    } catch (error) {
        res.status(201).json({ message: error.message })
    }
}


//Mise a jour d'une reservation
export const update_reservation = async (req, res) => {
    
    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //L'information actuelle
    const { id:idReservations } = req.params
    
    //console.log('notre id', id)
    //Validation de l'id
    if (!parseInt(idReservations)) return res.status(404).json({ message: "Cette reservation n'existe pas" })
    const reservation = await Reservations.findByPk(idReservations)
    //Nouvelle information
    const new_reservation = req.body
    try {
        await reservation.update(new_reservation)
        res.status(201).json({ message: "la reservation a ete mise a jour avec success" })

    } catch (error) {
        res.status(400).json({ message: error.message + "ici" })
    }
}



//Suppression d'une reservation
export const remove_reservation = async (req, res) => {
    const { id:idReservations } = req.params
    try {
        await Reservations.destroy({ where: { idReservations } })
        res.status(200).json({ message: `Reservation ${idReservations} supprimé avec succes` })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }

}
