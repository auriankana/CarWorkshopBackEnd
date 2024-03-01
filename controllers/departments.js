// Amener le modele du departement avec les relations
import { Department } from "../models/relation.js"

//Controller
export const departmentList = async (req, res) => {

    //Liste des departements depuis la base de donnees
    const departments = await Department.findAll()

    res.status(200).json({ data: departments })

}


    // Creation d'un departement
   export const addDepartment= async (req,res)=>{
        // Les informations du nouveau departement envoyé depuis postman
        const department = req.body

        //const {nom, description, creation_date} = req.body

        console.log('new department',department) // verification de l'envoie du departement

        // Un try catch afin quele programme ne plante pas en cas d'erreur
        try {
            await Department.create(department)// le await est dans l'optique de l'attente qui pourrait survenir lors de la creation de departement
            res.status(201).json({message:"Le departement a ete cree avec success"})
        } catch (error) {
            res.status(404).json({message:error.message})
        }
    }


    // Mise a jour d'un departement
    export const updateDepartment= async (req, res)=>{
        // L'information actuelle
        const {id}= req.params

        //Validattion de l'id
        if(! parseInt(id)) return res.status(404).json({message:"Ce departement n'existe pas"})     
        const department = await Department.findByPk(id)
        // Nouvelle information 
        const newDepartment = req.body
        
        // try catch
        try {
            await department.update(newDepartment)
            res.status(201).json({message:"Departemnt mis a jour avec success"})
        } catch (error) {
            res.status(404).json({message:error.message})
        }
    }


    // Suppression d'un departement 
    export const deleteDepartment= async (req, res)=>{
        const {id}= req.params

        //Validattion de l'id
        if(! parseInt(id)) return res.status(404).json({message:"Ce departement n'existe pas"}) 

        // try catch
        try {
            await Department.destroy({where: {id} })
            res.status(200).json({message: `Departement ${id} supprime avec success`})
        } catch (error) {
            res.status(404).json({message:error.message})
        }
    }

