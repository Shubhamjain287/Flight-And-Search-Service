class CrudService{
    constructor(repository){
        this.repository = repository;
    }

    async create(data){
        try {
            const responce = await this.repository.create(data);
            return responce;
        } catch (error) {
            console.log(`Something Went Wrong at Service Layer`);
            throw {error};
        }
    }

    async update(id,data){
        try {
            const responce = await this.repository.update(id,data);
            return responce;
        } catch (error) {
            console.log(`Something Went Wrong at Service Layer`);
            throw {error};
        }
    }

    async destroy(id){
        try {
            const responce = await this.repository.destroy(id);
            return responce;
        } catch (error) {
            console.log(`Something Went Wrong at Service Layer`);
            throw {error};
        }
    }

    async get(id){
        try {
            const responce = await this.repository.get(id);
            return responce;
        } catch (error) {
            console.log(`Something Went Wrong at Service Layer`);
            throw {error};
        }
    }

    async getAll(){
        try {
            const responce = await this.repository.getAll();
            return responce;
        } catch (error) {
            console.log(`Something Went Wrong at Service Layer`);
            throw {error};
        }
    }
}

module.exports = CrudService;