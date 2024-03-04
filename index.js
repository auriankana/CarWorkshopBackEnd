//Importations des modules installes
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import compression from 'compression'

//Pour avoir acces au fichier .env
import dotenv from 'dotenv'
const env=dotenv.config().parsed

// console.log('env',env)
//Creation de l'application

const app = express()

//Utilisations des modules importes dans l'application
//cors
app.use(cors())
//body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(helmet())
app.use(compression())
const PORT = 5000





// Modification of all parameters





//Importation du controllers
import { etudiantList } from './controllers/RoleController.js'
import { addDepartment, deleteDepartment, departmentList, updateDepartment } from './controllers/UtilisateurController.js'

//Creation reelle des tables
import database from './config/connexion.js'
import { router } from './routes/departmentRoute.js'

database.sync()

const notreFunction = (req, res) => {
    res.send('Bonjour')
}
app.get('/salutations', notreFunction)

app.get('/etudiants',etudiantList)


// app.get('/departments',departmentList)
// app.post('/departments', addDepartment)
// app.put('/departments/:id', updateDepartment)
// app.put('/departments/:id', deleteDepartment)


// Pour remplacer  les quatres fonctions du haut
app.use ("/departments", router)
app.get('/etudiants',etudiantList)
//Creation du serveur et demarrage du serveur
app.listen(PORT, () => console.log('Le serveur tourne sur ' + PORT))
