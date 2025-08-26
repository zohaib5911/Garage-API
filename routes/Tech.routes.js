const Tech = require("../models/Tech.model.js");
const express = require('express');
const routes = express.Router();
const TechController = require("../controller/Tech.controller.js");

// create tech
routes.post("/", TechController.createTech);
routes.get("/", TechController.getAllTechs);
routes.get("/search", TechController.searchTech);
routes.put("/update", TechController.updateTech);
routes.delete("/delete", TechController.deleteTech);

routes.post("/assignCar", TechController.assignCar);          // assign car
routes.put("/updateCarStatus",TechController.updateCarStatus);      // update car status
routes.patch("/updateCarPartStatus",TechController.updateCarPartStatus);  // update car part status


module.exports = routes;