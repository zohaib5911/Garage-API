const express = require('express'); 
const routes = express.Router();
const partsController = require("../controller/Parts.contoller.js");

routes.post("/", partsController.createPart);
routes.get("/", partsController.getAllParts);
routes.get("/:id", partsController.getPartById);
routes.put("/:id", partsController.updatePart);
routes.delete("/:id", partsController.deletePart);
routes.patch("/:id", partsController.updatePartStatus);

module.exports = routes;
