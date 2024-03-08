//Apporter tous les modeles
import Role from "./RoleModel.js";
import Utilisateur from "./UtilisateurModel.js";
import Departement from "./departement.js";
import Emplacement from "./emplacement.js";

//Definition des relations


//Un role a plusieurs utilisateurs
Role.hasMany(Utilisateur)


//Un utilisateur a un et un seul role
Utilisateur.belongsTo(Role)


// Un departement a plusieurs utilisateurs
Departement.hasMany(Utilisateur)


//Un utilisateur a un et un seul departement
Utilisateur.belongsTo(Departement)


//Un emplacement a plusieurs departements
Emplacement.hasMany(Departement)


//Un departement a un et un seul emplacement
Departement.belongsTo(Emplacement)


// await Department.sync()
// await Etudiant.sync()

export {Utilisateur, Role, Departement, Emplacement}