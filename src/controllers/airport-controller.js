const { AirportServive } = require("../services");
const { SuccessCodes } = require("../utils/error-codes");

const airportServive = new AirportServive();

const create = async (req,res) => {
    try {
const airportServive = new AirportServive();
        const responce = await airportServive.create(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data: responce,
            success: true,
            message: `Successfully Created a Airport`,
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: `Cannot create a new Airport`,
            err: error
        });
    }
}

module.exports = {
    create
}