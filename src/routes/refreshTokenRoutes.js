const express = require('express');
const router = express.Router();
const controller = require("../controllers/refreshTokenController");

/**
 * @swagger
 * components:
 *      schemas:
 *          RefreshLogin:
 *              type: object
 *              properties:
 *                  HASHSECTION:
 *                       type: string
 *                       example: 05e68e42903bf4a421d7e2fdb5b99620
 *                  
 */

/**
 * @swagger
 * /v1/usersection:
 *  post:
 *      description: Funcionalidade Refresh Login.
 *      tags: 
 *          - Refresh Login
 *      requestBody:
 *           required: true
 *           content: 
 *               application/json:
 *                   schema:
 *                      type: object
 *                      required:
 *                          - HASHSECTION
 *                      properties:
 *                          HASHSECTION:
 *                              type: string
 *                              example: 05e68e42903bf4a421d7e2fdb5b99620
 *                      items:
 *                          $ref: "#components/schemas/RefreshLogin"
 *      responses:
 *          '200':
 *              description: Ok
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 * 
 */
router.post('/usersection', controller.refreshToken);

module.exports = router;