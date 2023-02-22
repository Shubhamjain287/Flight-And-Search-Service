const express = require("express");
const router = express.Router();

const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controllers");
const AirportController = require("../../controllers/airport-controller");
const { validateCreateFlight } = require("../../middlewares");

router.get('/cities',CityController.getAllCities);
router.get('/city/:id',CityController.get);
router.post('/city',CityController.create);
router.patch('/city/:id',CityController.update);
router.delete('/city/:id',CityController.destroy);

router.post("/flights",validateCreateFlight, FlightController.create);
router.get("/flights",FlightController.getAll);
router.get("/flight/:id", FlightController.get);
router.patch("/flight/:id",FlightController.update);

router.post("/airports",AirportController.create);

module.exports = router;
