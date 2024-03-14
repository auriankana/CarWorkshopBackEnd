// Amener le modele  avec les relations
import{Paiement} from "../models/relation.js"

//Importer le module suivant dans le controller
import {validationResult } from 'express-validator'


// Fonction pour récupérer toutes les facturations
export const liste_Paiement = async (req, res) => {

    const paiement=await Paiement.findAll()

    res.status(200).json({ data: paiement , message:'Cella fonctionne parfaitement..'})
    
}
    

//Creation d'une facturation
export const add_paiement = async (req, res) => {

    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //Les informations du nouvel equipement
    const newpaiement = req.body

    try {
        await Paiement.create(newpaiement)
        res.status(201).json({ message: "Le paiement a ete cree avec succes" })
    } catch (error) {
        res.status(201).json({ message: error.message })
    }
}


//Mise a jour d'une paiement
export const update_paiement = async (req, res) => {
    
    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //L'information actuelle
    const { id } = req.params
    
    //console.log('notre id', id)
    //Validation de l'id
    if (!parseInt(id)) return res.status(404).json({ message: "Cette paiement n'existe pas" })
    const paiement = await Paiement.findByPk(id)
    //Nouvelle information
    const new_paiement = req.body
    try {
        await Paiement.update(new_paiement)
        res.status(201).json({ message: "la paiement a ete mis a jour avec success" })

    } catch (error) {
        res.status(400).json({ message: error.message + "ici" })
    }
}



//Suppression dune 
export const remove_paiement = async (req, res) => {
    const  {id:idpaiement}  = req.params

    if(! parseInt(idpaiement)) return res.status(404).json({message:"Ce paiement n'existe pas"})
    try {
        await Paiement.destroy({ where: { idpaiement} })
        res.status(200).json({ message: `paiement ${idpaiement} supprimé avec succes` })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }

}


