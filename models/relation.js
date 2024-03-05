//Apporter tous les modeles
import Role from "./RoleModel.js";
import Utilisateur from "./UtilisateurModel.js";
import Department from "./departement.js";
import Emplacement from "./emplacement.js";

//Definition des relations


//Un role a plusieurs utilisateur
Role.hasMany(Utilisateur)

//Un utilisateur a un et un seul role
Utilisateur.belongsTo(Role)




//Un role a plusieurs utilisateur
Emplacement.hasMany(Department)

//Un utilisateur a un et un seul role
Department.belongsTo(Emplacement)

// await Department.sync()
// await Etudiant.sync()

export {Utilisateur, Role}