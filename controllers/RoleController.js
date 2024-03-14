// Amener le modele du etudiant avec les relations
import { Role } from "../models/relation.js";
import { validationResult } from "express-validator";
//LIste des etudiants

export const roleList=async(req, res)=>{
    //Liste des etudiants depuis la base de donnees

    const roles=await Role.findAll()

    res.status(200).json({ data: roles , message:'Tout semble bien marche'})
}


// Ajouter un role 

export const addRole = async(req,res)=>{

    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const newRole = req.body

    try {
       await Role.create(newRole) 
       res.status(201).json({message: "le role a ete cree avec succes"})
    } 
    catch (error) {
        res.status(404).json({message: error.message})
    }
}


// Delete a role

export const deleteRole = async (req,res) =>{

    
    // Search of the role to delete
    const {id:idRole} = req.params
    //console.log("idRole:",idRole)

    if (!parseInt(idRole)) return res.status(404).json({message: "Ce role n'existe pas"})

    try {
        await Role.destroy({where : {idRole}})
        res.status(201).json({message: "Role detruit avec succes"})
    }
     catch (error) {
        res.status(404).json({message: error.message})
    }
     
}