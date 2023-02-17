const { Flights } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository{

    #createFilter(data){
        let filter = {};

        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        let priceFilter = [];
        if(data.minPrice){
            // Object.assign(filter,{ price: {
            //     [Op.gte]: data.minPrice
            // } 
            // });
            priceFilter.push({ price: {[Op.gte]: data.minPrice }});
        }
        if(data.maxPrice){
            // Object.assign(filter,{ price: {
            //     [Op.lte]: data.maxPrice
            // } 
            // });
            priceFilter.push({ price: {[Op.lte]: data.maxPrice }});
        }
        Object.assign(filter,{[Op.and]: priceFilter})
        return filter;
    }

    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log(`Something Went Wrong in the Repository Layer`);
            throw {error};
        }
    }

    async getFlight(flightId){
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log(`Something Went Wrong in the Repository Layer`);
            throw {error};
        }
    }

    async getAllFlight(filter){
        try {
            const filterObj = this.#createFilter(filter)
            const flight = await Flights.findAll({
                where: filterObj
            });
            return flight;
        } catch (error) {
            console.log(`Something Went Wrong in the Repository Layer`);
            throw {error};
        }
    }

}

module.exports = FlightRepository;