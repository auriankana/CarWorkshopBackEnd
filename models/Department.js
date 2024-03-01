// Importer les types de donnees
import { DataTypes } from "sequelize";

//Importer la connexion a la base de donnees
import database from "../config/connexion.js";

//Creation du modele (l'entite en base de donnees)

const Department = database.define('department', {
    nom: { type: DataTypes.STRING, allowNull: false },
    description: DataTypes.TEXT,
    creation_date: { type: DataTypes.DATEONLY, allowNull: false }
})


export default Department