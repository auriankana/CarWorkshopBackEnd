 // Impoter la fonction route

 import { Router } from "express"
import { addDepartment, deleteDepartment, departmentList, updateDepartment } from "../controllers/departments.js"


 export const router = Router()

 // Comme tous les elements ont le mot department au debut de laeurs chemins on ne le prcise pas
 router.get("/", departmentList)
 .post("/",addDepartment)
 .put("/:id",updateDepartment)
 .delete("/:id",deleteDepartment)