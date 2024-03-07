// Importer les types de donnees
import { DataTypes } from "sequelize";

//Importer la connexion a la base de donnees
import database from "../config/connexion.js";

//Creation du modele (l'entite en base de donnees)

const Reservations = database.define('Reservations', {
    idReservations: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true },
    modele: { type: DataTypes.STRING, allowNull: false },
   marque: { type: DataTypes.STRING, allowNull: false },
    electrique: { type: DataTypes.BOOLEAN, allowNull: false },
    probleme: { type: DataTypes.STRING, allowNull: false },
    date: DataTypes.DATE,
    heure: DataTypes.STRING,
    idUtilisateur: {
        type: DataTypes.INTEGER,
       
      }
},
{ timestamps: false})

export default Reservations




  

  
 
 