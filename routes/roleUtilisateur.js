import { Router } from "express";
import { roleList, addRole,deleteRole } from "../controllers/RoleController.js";

import roleRules from "../Validation/roleValidation.js";
import { verifierToken } from "../Authentification/verifierToken.js";
import autoriser from "../Authentification/autorisation.js";

export const routerRole = Router()

// Comme tous les elements ont le mot department au debut de laeurs chemins on ne le prcise pas
routerRole
.get("/",verifierToken, roleList)
.post("/",verifierToken, autoriser(['admin']), roleRules,addRole)
.delete("/:id",verifierToken, autoriser(['admin']), deleteRole)