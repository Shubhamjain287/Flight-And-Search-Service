const { FlightService } = require("../services");
const { SuccessCodes } = require("../utils/error-codes");

const flightService = new FlightService();

const create = async (req,res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            message: `Successfully Created a Flight`,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: `Not able Create a flight`,
            err: error
        });
    }
}

const getAll = async (req,res) => {
    try {
        const responce = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data: responce,
            success: true,
            message: `Successfully fetched all Flight`,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: `Not able fetched all flight`,
            err: error
        });
    }
}

module.exports = {
    create,
    getAll
}