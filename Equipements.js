// Amener le modele  avec les relations
import { Equipements } from "../models/relation.js"



// Fonction pour récupérer tous les équipements
export const liste_equipements = async (req, res) => {

    const equipements=await Equipements.findAll()

    res.status(200).json({ data: equipements , message:'Cella fonctionne parfaitement..'})
    
}
    

//Creation d'un equipement
export const add_equipement = async (req, res) => {

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
    //L'information actuelle
    const { id } = req.params
    
    //console.log('notre id', id)
    //Validation de l'id
    if (!parseInt(id)) return res.status(404).json({ message: "Cet equipement n'existe pas" })
    const equipement = await Equipements.findByPk(id)
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
    const { id } = req.params
    try {
        await Equipements.destroy({ where: { id } })
        res.status(200).json({ message: `equipement ${id} supprimé avec succes` })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }

}
