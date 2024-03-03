// Amener le modele du departement avec les relations
import { Utilisateur } from "../models/UtilisateurModel.js"

//Controllers


export const utilisateurList = async (req, res) => {

    //Liste des utilisateurs depuis la base de donnees
    const utilisateurs = await Department.findAll()

    res.status(200).json({ data: utilisateurs })

}


    // Creation d'un departement
   export const addUtilisateur= async (req,res)=>{
        // Les informations du nouveau departement envoyé depuis postman
        const utilisateur = req.body

        //const {nom, description, creation_date} = req.body

        console.log('new department',utilisateur) // verification de l'envoie du departement

        // Un try catch afin quele programme ne plante pas en cas d'erreur
        try {
            await Utilisateur.create(utilisateur)// le await est dans l'optique de l'attente qui pourrait survenir lors de la creation de departement
            res.status(201).json({message:"L'utilisateur a ete cree avec success"})
        } catch (error) {
            res.status(404).json({message:error.message})
        }
    }


    // Mise a jour d'un utilisateur
    export const updateUtilisateur= async (req, res)=>{
        // L'information actuelle
        const {id}= req.params

        //Validation de l'id
        if(! parseInt(id)) return res.status(404).json({message:"Cet utilisateur n'existe pas"})     
        const utilisateur = await Department.findByPk(id)
        // Nouvelle information 
        const newUtilisateur = req.body
        
        // try catch
        try {
            await utilisateur.update(newUtilisateur)
            res.status(201).json({message:"Utilisateur mis a jour avec success"})
        } catch (error) {
            res.status(404).json({message:error.message})
        }
    }


    // Suppression d'un utilisateur 
    export const deleteUtilisateur= async (req, res)=>{
        const {id}= req.params

        //Validattion de l'id
        if(! parseInt(id)) return res.status(404).json({message:"Cet utilisateur n'existe pas"}) 

        // try catch
        try {
            await Department.destroy({where: {id} })
            res.status(200).json({message: `Utilisateur ${id} supprime avec success`})
        } catch (error) {
            res.status(404).json({message:error.message})
        }
    }

