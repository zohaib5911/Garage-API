const express = require('express');
const routes  = express.Router();
const CarController = require("../controller/Car.controller.js");

routes.post("/", CarController.createCar);
routes.get("/", CarController.getAllCars);
routes.get("/:id", CarController.getCarById);
routes.put("/:id", CarController.updateCar);
routes.delete("/:id", CarController.deleteCar);
routes.put("/:id", CarController.updateStatus);
// Adding routes for car parts
routes.post("/:id/p", CarController.addPart);
routes.delete("/:id/p/:partId", CarController.deletePart);
routes.get("/:id/p", CarController.getParts);
routes.put("/:id/p/:partId", CarController.updatePart);
routes.get("/:id/p/:partId", CarController.getPartById);
routes.patch("/:id/p/:partId", CarController.updatePartStatus);


module.exports = routes;
