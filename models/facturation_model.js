// Importer les types de donnees
import { DataTypes } from "sequelize";

//Importer la connexion a la base de donnees
import database from "../config/connexion.js";

//Creation du modele (l'entite en base de donnees)

const Facturation = database.define('Facturation', {
    idfacturation: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Prix: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
     }

//     idUtilisateur: {
//         type: DataTypes.INTEGER,
//       },

// idReservation:{type: DataTypes.INTEGER,}

},
{ timestamps: false})

export default Facturation



 