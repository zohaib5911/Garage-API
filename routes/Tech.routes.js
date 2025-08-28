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

routes.get("/printAssignedCars/",TechController.printAssignedCars); // print assigned cars
routes.delete("/deleteDoneCars",TechController.deleteDoneCars); // delete done cars from assigned cars
routes.put("/updateAvaliablity",TechController.updateAvaliablity); // update tech availability

module.exports = routes;