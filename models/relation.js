//Apporter tous les modeles
import Etudiant from "./Etudiant.js";
import Department from "./Department.js";

//Definition des relations
//Un role a plusieurs utilisateur
Department.hasMany(Etudiant)



//Un emplacement a plusieurs departements



//Un emplacement a plusieurs equipements



//Un emplacement a plusieurs departemnts

//Un etudiant a un et un seul departement
Etudiant.belongsTo(Department)

// await Department.sync()
// await Etudiant.sync()

export {Etudiant, Department}