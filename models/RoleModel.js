// Importer les types de donnees
import { DataTypes } from "sequelize";

//Importer la connexion a la base de donnees
import database from "../config/connexion.js";

//Creation du modele (l'entite en base de donnees)

const Role = database.define('role', {
    idRole:{
        type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull:false,
        autoIncrement: true
    },
    titre: { 
        type: DataTypes.ENUM ('manager', 'admin', 'mechanic', 'supplier', 'customer') ,
        defaultValue: 'customer',
        allowNull: false
    }
})

export default Role