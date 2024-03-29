// Amener le modele du departement avec les relations
import { Departement } from "../models/relation.js"
//Importer le module suivant dans le controller
import {validationResult } from 'express-validator'

//Controller
export const departmentList = async (req, res) => {

    //Liste des departements depuis la base de donnees
    const departments = await Departement.findAll()

    res.status(200).json({ data: departments, message:'Tout semble bien marche' })

}

//Creation d'un departement
export const addDepartment = async (req, res) => {
    
    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //Les informations du nouveau departement
    const department = req.body
    // const { nom, description, creation_date } = req.body
    // console.log('new depart', department)
    try {
        await Departement.create(department)
        res.status(201).json({ message: "Le departement cree avec succes" })
    } catch (error) {
        res.status(201).json({ message: error.message })
    }
}

//Mise a jour d'un departement
export const updateDepartment = async (req, res) => {
    
    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //L'information actuelle
    const { id:idDepartement } = req.params
    
    //console.log('notre id', id)
    //Validation de l'id
    if (!parseInt(idDepartement)) return res.status(404).json({ message: "Ce departement n'existe pas" })
    const departement = await Departement.findByPk(idDepartement)
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
    const {id:idDepartement } = req.params
    try {
        await Departement.destroy({ where: { idDepartement } })
        res.status(200).json({ message: `Departement ${idDepartement} supprime avec succes` })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }

}




