const express = require("express");
const router = express.Router();

const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controllers");

router.get('/cities',CityController.getAllCities);
router.get('/city/:id',CityController.get);
router.post('/city',CityController.create);
router.patch('/city/:id',CityController.update);
router.delete('/city/:id',CityController.destroy);

router.post("/flights", FlightController.create);

module.exports = router;
