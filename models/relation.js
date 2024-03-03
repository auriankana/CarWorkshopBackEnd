//Apporter tous les modeles
import Role from "./RoleModel.js";
import Utilisateur from "./UtilisateurModel.js";

//Definition des relations


//Un role a plusieurs utilisateur
Role.hasMany(Utilisateur)

//Un utilisateur a un et un seul role
Utilisateur.belongsTo(Role)

// await Department.sync()
// await Etudiant.sync()

export {Utilisateur, Role}