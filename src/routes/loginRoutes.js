const express = require('express');
const router = express.Router();
const controller = require("../controllers/loginController");

/**
 * @swagger
 * components:
 *      schemas:
 *          Login:
 *              type: object
 *              properties:
 *                  user:
 *                       type: string
 *                       example: jose.euripedes
 *                  password:
 *                          type: string
 *                          example: tra1234
 *                  
 */

/**
 * @swagger
 * /v1/login:
 *  post:
 *      description: Funcionalidade Login.
 *      tags: 
 *          - Login
 *      requestBody:
 *           required: true
 *           content: 
 *               application/json:
 *                   schema:
 *                      type: object
 *                      required:
 *                          - user
 *                          - password
 *                      properties:
 *                          user:
 *                              type: string
 *                              example: jose.euripedes
 *                          password:
 *                              type: string
 *                              example: tra1234
 *                      items:
 *                          $ref: "#components/schemas/Login"
 *                         
 *      responses:
 *          '200':
 *              description: Ok
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 * 
 */
router.post('/login', controller.login);

module.exports = router;