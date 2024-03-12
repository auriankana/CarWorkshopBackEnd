// Importer les types de donnees
import { DataTypes } from "sequelize";

//Importer la connexion a la base de donnees
import database from "../config/connexion.js";

//Creation du modele (l'entite en base de donnees)

const Utilisateur = database.define('utilisateur', {
    idUtilisateur:{
        type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull:false,
        autoIncrement: true
    },
    nom: { type: DataTypes.STRING, allowNull: false },
    prenom: { type: DataTypes.STRING, allowNull: false },
    adresse: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique:{msg:"email doit être unique"} },
    motDePasse: { type: DataTypes.STRING, allowNull: false },
//     idRole: {type: DataTypes.INTEGER, references: { model: 'roles', key: 'idRole' } },
//     idDepartement: {type: DataTypes.INTEGER, references: { model: 'departements', key: 'idDepartement' }}
 })


export default Utilisateur