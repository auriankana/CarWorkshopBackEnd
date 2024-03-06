// Amener le modele du departement avec les relations
import { Utilisateur } from "../models/relation.js"
import bcrypt from 'bcrypt'
//Controllers


export const utilisateurList = async (req, res) => {

    //Liste des utilisateurs depuis la base de donnees
    const utilisateurs = await Utilisateur.findAll()

    res.status(200).json({ data: utilisateurs })

}


    // Creation d'un utilisateur
   export const addUtilisateur= async (req,res)=>{
        // Les informations du nouvel utilisateur envoyé depuis postman


        // Hachage du mot de passe
        const {idutilisateur, nom, prenom, adresse, email, motDePasse, idRole, idDepartement} = req.body

         const mdpHash = bcrypt.hashSync(motDePasse,10)
         
         const utilisateur ={idutilisateur, nom, prenom, adresse, email, motDePasse: mdpHash, idRole, idDepartement}

        console.log('new utilisateur',utilisateur) // verification de l'envoi de l'utilisateur

        // Un try catch afin que le programme ne plante pas en cas d'erreur
        try {
            await Utilisateur.create(utilisateur)// le await est dans l'optique de l'attente qui pourrait survenir lors de la creation de l'utilisateur
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
        const utilisateur = await Utilisateur.findByPk(id)
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
            await Utilisateur.destroy({where: {id} })
            res.status(200).json({message: `Utilisateur ${id} supprime avec success`})
        } catch (error) {
            res.status(404).json({message:error.message})
        }
    }

