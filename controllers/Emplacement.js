import {Emplacement} from '../models/relation.js';
//Importer le module suivant dans le controller
import {validationResult } from 'express-validator'

export const emplacementList = async (req, res) => {
    try {
        const emplacements = await Emplacement.findAll();
        res.status(200).json({ data: emplacements });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
//creation d 'un emplacement
export const addEmplacement = async (req, res) => {
    
    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const emplacement = req.body;
    try {
        await Emplacement.create(emplacement);
        res.status(201).json({ message: "L'emplacement a été créé avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
//mis a jour d'un emplacement
export const updateEmplacement = async (req, res) => {
    
    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { id:idEmplacement } = req.params;
    if (!parseInt(idEmplacement)) return res.status(404).json({ message: "Cet emplacement n'existe pas" });
    const emplacement = await Emplacement.findByPk(idEmplacement);
    const newEmplacement = req.body;
    try {
        await emplacement.update(newEmplacement);
        res.status(201).json({ message: "Emplacement mis à jour avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
//Suppression d'un emplacement
export const removeEmplacement = async (req, res) => {
    const { id:idEmplacement } = req.params;
    try {
        await Emplacement.destroy({ where: { idEmplacement } });
        res.status(200).json({ message: `Emplacement ${idEmplacement} supprimé avec succès` });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
