# Welcom to Flight Service

## Project Setup
 - clone the Project on Your Local
 - Execute `npm install` on the same path as of your root directory of the downloaded project.
 - Create a `.env` file in the root directory and add the following environment variable.
    - `PORT = 2800`
 - Inside the `src/config` folder create a new file `config.json` and them add the following code.

```
    {
        "development": {
            "username": <YOUR_DATABASE_LOGIN_NAME>,
            "password": <YOUR_DATABASE_PASSWORD>,
            "database": <YOUR_DATABASE_NAME>,
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
    }
```
 - Once you've added your db config a listed above, go to the src folder from your terminal and execute `npx sequelize db:create`

 ## Table

 ### City -> id, name, created_at, updated_at
 ### Airport -> id, name, Address, city_id, created_at, updated_at
    RelationShip -> City has many Airports and Airport belongs to a city (one to Many)

 `npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer`

 `npx sequelize db:migrate`

 - Add `SYNC_DB` Variable in `.env` file so it will SYNC Database One Time Only.
 
 ## Airplane Model

 - Creating Airplane Model
 ```
 npx sequelize  model:generate --name Airplane --attributes modelNumber:String,capacity:integer
 ```

 - Migration of Model from Development to Database.
 ```
 npx sequelize db:migrate
 ```

 - Adding Seeders File to Seed Airplane Names to Database.
 ```
 npx sequelize seed:generate --name add-airplanes
 ```

 - Seeding All the Values to Database
 ```
 npx sequelize db:seed:all
 ```