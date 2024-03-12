// Importer les types de donnees
import { DataTypes } from "sequelize";

//Importer la connexion a la base de donnees
import database from "../config/connexion.js";

//Creation du modele (l'entite en base de donnees)

const Paiement = database.define('Paiement', {
    idpaiement: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Prix: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Mode_paiement: {
        type: DataTypes.STRING,
        
    },

    idFacturation: {
        type: DataTypes.INTEGER,
       
      },

Date_paiement:{type: DataTypes.STRING,}

},
{ timestamps: false})

export default Paiement



 