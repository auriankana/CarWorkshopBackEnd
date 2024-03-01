// Amener le modele du etudiant avec les relations
import { Etudiant } from "../models/relation.js";

//LIste des etudiants

export const etudiantList=async(req, res)=>{
    //Liste des etudiants depuis la base de donnees

    const etudiants=await Etudiant.findAll()

    res.status(200).json({ data: etudiants , message:'Tour semble bien marche'})
}