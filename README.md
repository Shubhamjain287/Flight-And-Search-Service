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

 