import { Router } from "express";
import { roleList, addRole,deleteRole } from "../controllers/RoleController.js";

export const routerRole = Router()

// Comme tous les elements ont le mot department au debut de laeurs chemins on ne le prcise pas
routerRole.get("/", roleList)
.post("/",addRole)
.delete("/:id",deleteRole)