import { Router } from "express";

import { login } from "../Authentification/login.js";

import loginRules from "../Validation/validationLogin.js";

const authentificationRoute = Router()

authentificationRoute.post('/', loginRules, login)

export default authentificationRoute