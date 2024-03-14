//Apporter tous les modeles
import Role from "./RoleModel.js";
import Utilisateur from "./UtilisateurModel.js";
import Departement from "./Departement.js";
import Emplacement from "./Emplacement.js";
import Equipements from "./Equipements.js";
import Reservations from "./Reservations.js";
import Facturation from "./facturation_model.js";
import Paiement from "./paiement_model.js";

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







//Une facture a plusieurs paiements
Facturation.hasMany(Paiement)

//Un paiement a une et une seul facture
Paiement.belongsTo(Facturation)




//Un utilisateur a plusieurs factures
Utilisateur.hasMany(Facturation)

//Un paiement a une et une seul facture
Facturation.belongsTo(Utilisateur)



//Une reservation a plusieurs factures
Reservations.hasMany(Facturation)

//Une facture a une et une seul reservation
Facturation.belongsTo(Reservations)

export {Utilisateur, Role, Departement, Emplacement,Reservations,Equipements,Facturation,Paiement}
//Apporter tous les modeles
