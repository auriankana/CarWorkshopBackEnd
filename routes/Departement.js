//Importer la fonction route
import { Router } from "express";

//Importer les controllers pour la creation des routes
import { addDepartment, departmentList, removeDepartment, updateDepartment } from "../controllers/Departement.js";

export const departmentRouter = Router()

departmentRouter
.get("/", departmentList)
.post("/", addDepartment)
.put("/:id", updateDepartment)
.delete("/:id",removeDepartment)



    