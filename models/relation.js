//Apporter tous les modeles

import Facturation from "./facturation_model.js";
import Paiement from "./paiement_model.js";

//Definition des relations
//Un departement a plusieurs etudiants
Facturation.hasMany(Paiement)

//Un etudiant a un et un seul departement
Paiement.belongsTo(Facturation)

// await Department.sync()
// await Etudiant.sync()

export {Facturation,Paiement}