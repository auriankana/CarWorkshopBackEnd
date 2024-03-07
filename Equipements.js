// Importer les types de donnees
import { DataTypes } from "sequelize";

//Importer la connexion a la base de donnees
import database from "../config/connexion.js";

//Creation du modele (l'entite en base de donnees)

const  Equipements = database.define('Equipements', {

    idEquipements: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true},
    nom: { type: DataTypes.STRING, allowNull: false },
    description: DataTypes.STRING,allowNull: false 
},
{ timestamps: false})


export default Equipements



 