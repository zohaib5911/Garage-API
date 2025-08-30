const User = require("../models/User.model.js");
const express = require('express');
const routes  = express.Router();
const UserController = require("../controller/User.controller.js");

// user 
routes.post("/",UserController.regester);
routes.get("/",UserController.getAll);
routes.get("/search",UserController.getID);
routes.put("/update",UserController.updateUser);
routes.delete("/delete",UserController.deleteUser);
routes.post("/login", UserController.verifyLogin);
// user car routes
routes.post("/cars", UserController.addCar);
routes.get("/cars", UserController.getCars);
routes.get("/cars/search", UserController.getCarById);
routes.put("/cars/update", UserController.updateCar);
routes.get("/cars/done", UserController.doneCars);
// routes.delete("/:id/cars/:carId", UserController.deleteCar);
// PARTS  VIEW 
routes.get("/cars/parts", UserController.getParts);
routes.post("/cars/parts", UserController.addPart);
routes.get("/cars/parts/search", UserController.getPartById);
routes.put("/cars/parts/update", UserController.updatePart);
// routes.delete("/:id/cars/:carId/parts/:partId", UserController.deletePart);

module.exports = routes;