const express = require('express');
const routes  = express.Router();
const CarController = require("../controller/Car.controller.js");
const partRoutes = require("./Parts.routes.js");

routes.post("/", CarController.createCar);
routes.get("/", CarController.getAllCars);
routes.get("/:id", CarController.getCarById);
routes.put("/:id", CarController.updateCar);
routes.delete("/:id", CarController.deleteCar);
routes.patch("/:id", CarController.updateStatus);
// Adding routes for car parts


routes.use("/:carId/part/", partRoutes);

module.exports = routes;




// routes.post("/:id/parts", CarController.addPart);
// routes.delete("/:id/parts/:partId", CarController.deletePart);
// routes.get("/:id/parts", CarController.getParts);
// routes.put("/:id/parts/:partId", CarController.updatePart);
// routes.get("/:id/parts/:partId", CarController.getPartById);
// routes.patch("/:id/parts/:partId", CarController.updatePartStatus);