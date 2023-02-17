const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService{

    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){
        try {

            if(compareTime(data.arrivalTime,data.departureTime)){
                throw { error: "Arrival Time Cannot be Less Than Departure time" };
            }

            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({...data, totalSeats: airplane.capacity});
            return flight;
        } catch (error) {
            console.log(`Something Went Wrong at Service Layer`);
            throw {error};
        }
    }

    async getAllFlightData(data){
        const flight = this.flightRepository.getAllFlight(data);
        return flight;
    }

}

/*
   {
      flightNumber
      airplaneId
      departureAirportId
      arrivalAirportId
      arrivalTime
      departureTime
      price
      totalSeats -> Airplane
   }
*/

module.exports = FlightService;