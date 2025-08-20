const express = require('express');
const routes  = express.Router();
const CarController = require("../controller/Car.controller.js");

routes.post("/", CarController.createCar);
routes.get("/", CarController.getAllCars);
routes.get("/:id", CarController.getCarById);
routes.put("/:id", CarController.updateCar);
routes.delete("/:id", CarController.deleteCar);
routes.patch("/:id", CarController.updateStatus);

module.exports = routes;