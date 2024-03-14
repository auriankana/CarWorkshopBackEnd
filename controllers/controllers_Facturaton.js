// Amener le modele  avec les relations
import { Facturation } from "../models/relation.js"

//Importer le module suivant dans le controller
import {validationResult } from 'express-validator'


// Fonction pour récupérer toutes les facturations
export const liste_facturation = async (req, res) => {

    const facturation=await Facturation.findAll()

    res.status(200).json({ data: facturation , message:'Cela fonctionne parfaitement..'})
    
}
    

//Creation d'une facturation
export const add_facturation = async (req, res) => {

    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //Les informations du nouvel equipement
    const newfacturation = req.body

    try {
        await Facturation.create(newfacturation)
        res.status(201).json({ message: "La facturation a ete cree avec succes" })
    } catch (error) {
        res.status(201).json({ message: error.message })
    }
}


//Mise a jour d'une facturation
export const update_facturation = async (req, res) => {
    
    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //L'information actuelle
    const { id:idfacturation } = req.params
    
    //console.log('notre id', id)
    //Validation de l'id
    if (!parseInt(idfacturation)) return res.status(404).json({ message: "Cette facturation n'existe pas" })
    const facturation = await Facturation.findByPk(idfacturation)
    //Nouvelle information
    const new_facturation = req.body
    try {
        await Facturation.update(new_facturation)
        res.status(201).json({ message: "la facturation a ete mis a jour avec success" })

    } catch (error) {
        res.status(400).json({ message: error.message + "ici" })
    }
}



//Suppression dune 
export const remove_facturation = async (req, res) => {
    const  {id:idfacturation}  = req.params

    if(! parseInt(idfacturation)) return res.status(404).json({message:"Cette facturation n'existe pas"})
    try {
        await Facturation.destroy({ where: { idfacturation } })
        res.status(200).json({ message: `facturation ${idfacturation} supprimé avec succes` })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }

}


