# Express-React-Posts

Project was developed by Fernando Penna for Alumnet's test.

+ Express;
+ Sequelize;
+ JSON Web Tokens;
+ Handles for responses and errors;
+ Unit Testing;
+ React with redux;

Commands to run the Server:

First install dependencies
```
npm i
```

Second create database (mysql or mariadb) from command-line, the database created will have the attributes from server/config/database.js
```
node_modules/.bin/sequelize db:create
```

Third create the schema to generate the tables
```
gulp sequelize:drop
```

Them start the dev server using the command
```
npm run dev
```

Commands to run react

First install dependencies:
```
yarn install
```

Then to run the project:
```
yarn start or npm start
```