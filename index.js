const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Bialog',
        description: "API NodeJs",
        version: '1.0.0',
      },
      servers:[
        {
            url: "/"
        }
      ],
    },
    apis: ["./src/routes/*.js"],
  };

const openapiSpecification = swaggerJsdoc(options);

const loginRoutes = require("./src/routes/loginRoutes");
const refreshTokenRoutes = require("./src/routes/refreshTokenRoutes");
const consultRoutes = require("./src/routes/consultRoutes");

//Router swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

//Router login
app.use('/v1', loginRoutes);

//Router refresh token
app.use('/v1', refreshTokenRoutes);

//Router consult
app.use('/v1', consultRoutes);

module.exports = app