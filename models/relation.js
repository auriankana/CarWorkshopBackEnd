//Apporter tous les modeles

import Equipements from "./Equipements.js";
import Reservations from "./Reservations.js";

//Definition des relations
//Un departement a plusieurs etudiants
Reservations.hasMany(Equipements)

//Un etudiant a un et un seul departement
Equipements.belongsTo(Reservations)

// await Department.sync()
// await Etudiant.sync()

export {Reservations,Equipements}