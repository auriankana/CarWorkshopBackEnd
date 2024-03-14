//Importer la fonction route
import { Router } from "express";

//Importer les controllers pour la creation des routes
import { addDepartment, departmentList, removeDepartment, updateDepartment } from "../controllers/Departement.js";
import { verifierToken } from "../Authentification/verifierToken.js";
import autoriser from "../Authentification/autorisation.js"
import departmentRules from "../Validation/departementValidation.js";

export const departmentRouter = Router()

departmentRouter
.get("/",verifierToken, departmentList)
.post("/",verifierToken, autoriser(['admin','manager']), departmentRules, addDepartment)
.put("/:id",verifierToken, autoriser(['admin','manager']), departmentRules, updateDepartment)
.delete("/:id",verifierToken, autoriser(['admin','manager']),removeDepartment)



    