import { Router, application } from "express";
import { addEmplacement, emplacementList, removeEmplacement, updateEmplacement } from "../controllers/Emplacement.js";
import { verifierToken } from "../Authentification/verifierToken.js";
import autoriser from "../Authentification/autorisation.js"
import emplacementRules from "../Validation/emplacementValidation.js";


export const emplacementRouter = Router();

emplacementRouter
.get("/",verifierToken, emplacementList)
.post("/",verifierToken, autoriser(['admin']), emplacementRules, addEmplacement)
.put("/:id",verifierToken, autoriser(['admin']), emplacementRules, updateEmplacement)
.delete("/:id",verifierToken, autoriser(['admin']), removeEmplacement);

