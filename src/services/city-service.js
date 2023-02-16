const { CityRepository } = require("../repository/index");

class CityService {

    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log(`Something Went Wrong at Service Layer`);
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try {
            const city = await this.cityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log(`Something Went Wrong at Service Layer`);
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            const responce = await this.cityRepository.deleteCity(cityId);
            return responce;
        } catch (error) {
            console.log(`Something Went Wrong at Service Layer`);
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log(`Something Went Wrong at Service Layer`);
            throw {error};
        }
    }

    async getAllCities(filter){
        try {
            const cities = await this.cityRepository.getAllCities(filter);
            return cities;
        } catch (error) {
            console.log(`Something Went Wrong at Service Layer`);
            throw {error};
        }
    }
}

module.exports = CityService;