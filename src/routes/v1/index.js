const express = require("express");
const router = express.Router();

const CityController = require("../../controllers/city-controller");

router.get('/cities',CityController.getAllCities);
router.get('/city/:id',CityController.get);
router.post('/city',CityController.create);
router.patch('/city/:id',CityController.update);
router.delete('/city/:id',CityController.destroy);

module.exports = router;
