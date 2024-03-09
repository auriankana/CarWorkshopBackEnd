//Apporter tous les modeles
import Role from "./RoleModel.js";
import Utilisateur from "./UtilisateurModel.js";
import Departement from "./Departement.js";
import Emplacement from "./Emplacement.js";
import Equipements from "./Equipements.js";
import Reservations from "./Reservations.js";

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





//Un utilisateur a plusieurs reservations
Utilisateur.hasMany(Reservations)

//Une a un et un seul utilisateur
Reservations.belongsTo(Utilisateur)









//Un emplacement a plusieurs equipemnts
Emplacement.hasMany(Equipements)


//Un equipement a un et un seul emplacement
Equipements.belongsTo(Emplacement)

export {Utilisateur, Role, Departement, Emplacement,Reservations,Equipements}