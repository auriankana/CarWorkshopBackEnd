import { DataTypes } from "sequelize";
import database from "../config/connexion.js";

const Emplacement = database.define('emplacement', {
    idEmplacement: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    adresse: { type: DataTypes.STRING, allowNull: false },
    codePostal: { type: DataTypes.STRING, allowNull: false },
    effectif: { type: DataTypes.INTEGER, allowNull: false }
})

export default Emplacement;
