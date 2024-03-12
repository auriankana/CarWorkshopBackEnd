// Amener le modele du departement avec les relations
import { Utilisateur } from "../models/relation.js"
import bcrypt from 'bcrypt'

//Importer le module suivant dans le controller
import {validationResult } from 'express-validator'

export const utilisateurList = async (req, res) => {

    //Liste des utilisateurs depuis la base de donnees
    const utilisateurs = await Utilisateur.findAll()

    res.status(200).json({ data: utilisateurs })

}


    // Creation d'un utilisateur
   export const addUtilisateur= async (req,res)=>{
        // Les informations du nouvel utilisateur envoyé depuis postman
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        res.status(400).json ({ errors: errors.array() });
        }

        // Hachage du mot de passe
        const {idutilisateur, nom, prenom, adresse, email, motDePasse, roleIdRole, departementIdDepartement} = req.body

         const mdpHash = bcrypt.hashSync(motDePasse,10)
         
         const utilisateur ={idutilisateur, nom, prenom, adresse, email, motDePasse: mdpHash,  roleIdRole, departementIdDepartement}

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
        
        //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
        // L'information actuelle
        const {id:idUtilisateur}= req.params

        //Validation de l'id
        if(! parseInt(idUtilisateur)) return res.status(404).json({message:"Cet utilisateur n'existe pas"})     
        const utilisateur = await Utilisateur.findByPk(idUtilisateur)
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
        const {id:idUtilisateur}= req.params

        //Validattion de l'id
        if(! parseInt(idUtilisateur)) return res.status(404).json({message:"Cet utilisateur n'existe pas"}) 

        // try catch
        try {
            await Utilisateur.destroy({where: {idUtilisateur} })
            res.status(200).json({message: `Utilisateur ${idUtilisateur} supprime avec success`})
        } catch (error) {
            res.status(404).json({message:error.message})
        }
    }

