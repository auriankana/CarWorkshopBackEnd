// Importer les types de donnees
import { DataTypes } from "sequelize";

//Importer la connexion a la base de donnees
import database from "../config/connexion.js";

//Creation du modele (l'entite en base de donnees)

const  Equipements = database.define('Equipements', {

    idEquipements: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idEmplacement: { type: DataTypes.INTEGER, references: { model: 'Emplacement', key: 'idEmplacement' }}
},
 { timestamps: false });


export default Equipements



 