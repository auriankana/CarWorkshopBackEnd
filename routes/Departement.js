//Importer la fonction route
import { Router } from "express";

//Importer les controllers pour la creation des routes
import { addDepartment, departmentList, removeDepartment, updateDepartment } from "../controllers/departments.js";

const router = Router()

router
    app.get("/", departmentList)
    app.post("/", addDepartment)
    app.put("/:id", updateDepartment)
    app.delete("/:id",removeDepartment)


    export default router