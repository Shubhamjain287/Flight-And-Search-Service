const { AirportRepository } = require("../repository");
const CrudService = require("./crud-service");

class AirportServive extends CrudService{
    constructor(){
        const airportRepository = new AirportRepository();
        super(airportRepository);
    }
}

module.exports = AirportServive;