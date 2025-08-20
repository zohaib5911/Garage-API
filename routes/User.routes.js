const User = require("../models/User.model.js");
const express = require('express');
const routes  = express.Router();
const UserController = require("../controller/User.controller.js");

routes.post("/",UserController.regester);
routes.get("/",UserController.getAll);
routes.get("/:id",UserController.getID);
routes.put("/:id",UserController.updateUser);
routes.delete("/:id",UserController.deleteUser);
routes.post("/login", UserController.verifyLogin);



module.exports = routes;