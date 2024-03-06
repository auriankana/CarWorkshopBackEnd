import { Router, application } from "express";
import { addEmplacement, emplacementList, removeEmplacement, updateEmplacement } from "../controllers/Emplacement.js";

export const emplacementRouter = Router();

emplacementRouter
.get("/", emplacementList)
.post("/", addEmplacement)
.put("/:id", updateEmplacement)
.delete("/:id", removeEmplacement);

