// Importer les types de données
import { DataTypes } from "sequelize";

// Importer la connexion à la base de données
import database from "../config/connexion.js";

// Création du modèle (l'entité en base de données)
const Departement = database.define('departement', {
    idDepartment: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nom: { type: DataTypes.STRING, allowNull: false },
    effectif: { type: DataTypes.INTEGER, allowNull: false },
    idEmplacement: { type: DataTypes.INTEGER}
});

export default Departement;
