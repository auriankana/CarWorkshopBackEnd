// Amener le modele  avec les relations
import { Equipements } from "../models/relation.js"

//Importer le module suivant dans le controller
import {validationResult } from 'express-validator'


// Fonction pour récupérer tous les équipements
export const liste_equipements = async (req, res) => {

    const equipements=await Equipements.findAll()

    res.status(200).json({ data: equipements , message:'Cella fonctionne parfaitement..'})
    
}
    

//Creation d'un equipement
export const add_equipement = async (req, res) => {

    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //Les informations du nouvel equipement
    const newequipement = req.body

    try {
        await Equipements.create(newequipement)
        res.status(201).json({ message: "L'equipement a ete cree avec succes" })
    } catch (error) {
        res.status(201).json({ message: error.message })
    }
}


//Mise a jour dun equipement
export const update_equipement = async (req, res) => {
    
    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //L'information actuelle
    const { id:idEquipements } = req.params
    
    //console.log('notre id', id)
    //Validation de l'id
    if (!parseInt(idEquipements)) return res.status(404).json({ message: "Cet equipement n'existe pas" })
    const equipement = await Equipements.findByPk(idEquipements)
    //Nouvelle information
    const new_equipement = req.body
    try {
        await equipement.update(new_equipement)
        res.status(201).json({ message: "l'equipement a ete mis a jour avec success" })

    } catch (error) {
        res.status(400).json({ message: error.message + "ici" })
    }
}



//Suppression dun equipement
export const remove_equipement = async (req, res) => {
    const { id:idEquipements } = req.params
    try {
        await Equipements.destroy({ where: { idEquipements } })
        res.status(200).json({ message: `equipement ${idEquipements} supprimé avec succes` })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }

}
