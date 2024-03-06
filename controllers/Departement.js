// Amener le modele du departement avec les relations
import { Department } from "../models/relation.js"

//Controller
export const departmentList = async (req, res) => {

    //Liste des departements depuis la base de donnees
    const departments = await Department.findAll()

    res.status(200).json({ data: departments })

}

//Creation d'un departement
export const addDepartment = async (req, res) => {
    //Les informations du nouveau departement
    const department = req.body
    // const { nom, description, creation_date } = req.body
    // console.log('new depart', department)
    try {
        await Department.create(department)
        res.status(201).json({ message: "Le departement cree avec succes" })
    } catch (error) {
        res.status(201).json({ message: error.message })
    }
}

//Mise a jour d'un departement
export const updateDepartment = async (req, res) => {
    //L'information actuelle
    const { id } = req.params
    
    //console.log('notre id', id)
    //Validation de l'id
    if (!parseInt(id)) return res.status(404).json({ message: "Ce departement n'existe pas" })
    const departement = await Department.findByPk(id)
    //Nouvelle information
    const newDepartement = req.body
    try {
        await departement.update(newDepartement)

        //Autre possibilite
        //await Department.update(newDepartement, { where: { id } })

        res.status(201).json({ message: "Department mis a jour avec success" })

    } catch (error) {
        res.status(400).json({ message: error.message + "ici" })
    }

}

//Suppression d'un department
export const removeDepartment = async (req, res) => {
    const { id } = req.params
    try {
        await Department.destroy({ where: { id } })
        res.status(200).json({ message: `Departement ${id} supprime avec succes` })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }

}




