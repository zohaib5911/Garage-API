const User = require("../models/User.model.js");
const express = require('express');
const routes  = express.Router();
const UserController = require("../controller/User.controller.js");

// user 
routes.post("/",UserController.regester);
routes.get("/",UserController.getAll);
routes.get("/searchUser", UserController.searchUser);
routes.get("/:id",UserController.getID);
routes.put("/:id",UserController.updateUser);
routes.delete("/:id",UserController.deleteUser);
routes.post("/login", UserController.verifyLogin);
// user car routes
routes.post("/:id/cars", UserController.addCar);
routes.get("/:id/cars", UserController.getCars);
routes.get("/:id/cars/:carId", UserController.getCarById);
routes.put("/:id/cars/:carId", UserController.updateCar);
// routes.delete("/:id/cars/:carId", UserController.deleteCar);
// PARTS  VIEW 
routes.get("/:id/cars/:carId/parts", UserController.getParts);
routes.post("/:id/cars/:carId/parts", UserController.addPart);
routes.get("/:id/cars/:carId/parts/:partId", UserController.getPartById);
routes.put("/:id/cars/:carId/parts/:partId", UserController.updatePart);
// routes.delete("/:id/cars/:carId/parts/:partId", UserController.deletePart);

module.exports = routes;