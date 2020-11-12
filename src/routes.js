const express = require("express");
const routes = express.Router();

const GoogleRequests = require("./Controller/GoogleRequests.controller");
const Crud = require("./Controller/Crud.controller");

routes.get("/places/:latlng", GoogleRequests.requestNearBy);
routes.get("/detailplace/:hash_id", GoogleRequests.requestDetailsPlace);
routes.post("/user/", Crud.InsertData);

module.exports = routes;
