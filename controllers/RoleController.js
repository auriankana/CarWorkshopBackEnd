// Amener le modele du etudiant avec les relations
import { where } from "sequelize";
import { Role } from "../models/relation.js";

//LIste des etudiants

export const roleList=async(req, res)=>{
    //Liste des etudiants depuis la base de donnees

    const etudiants=await Etudiant.findAll()

    res.status(200).json({ data: etudiants , message:'Tout semble bien marche'})
}


// Ajouter un role 

export const addRole = async(req,res)=>{
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
    const idRole = req.params
    if (!parseInt(idRole)) return res.status(404).json({message: "Ce role n'existe pas"})

    try {
        await Role.destroy({where : {idRole}})
        res.status(201).json({message: "Role detruit avec succes"})
    }
     catch (error) {
        res.status(404).json({message: error.message})
    }
     
}