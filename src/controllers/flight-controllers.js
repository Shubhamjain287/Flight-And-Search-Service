const { FlightService } = require("../services");

const flightService = new FlightService();

const create = async (req,res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
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
        return res.status(201).json({
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