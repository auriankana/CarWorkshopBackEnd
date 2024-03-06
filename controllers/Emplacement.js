import Emplacement from "../models/emplacement.js";

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
    const { id } = req.params;
    if (!parseInt(id)) return res.status(404).json({ message: "Cet emplacement n'existe pas" });
    const emplacement = await Emplacement.findByPk(id);
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
    const { id } = req.params;
    try {
        await Emplacement.destroy({ where: { id } });
        res.status(200).json({ message: `Emplacement ${id} supprimé avec succès` });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
