import { Router, application } from "express";
import { addEmplacement, emplacementList, removeEmplacement, updateEmplacement } from "../controllers/emplacementController.js";

const router = Router();

router
    app.get("/", emplacementList)
    app.post("/", addEmplacement)
    app.put("/:id", updateEmplacement)
    app.delete("/:id", removeEmplacement);

export default router;
