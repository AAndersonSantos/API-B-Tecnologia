const express = require('express');
const router = express.Router();
const controller = require("../controllers/consultController");

/**
 * @swagger
 * /v1/consultar:
 *  get:
 *      description: Consultar tabelas genéricas
 *      tags: 
 *          - Consultar
 *      parameters:
 *          - in: query
 *            name: ENDPOINT
 *            type: string
 *            description: Endpoint
 *            required: true
 *      responses:
 *          '200':
 *              description: Query executada com sucesso!
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 * 
 */
router.get('/consultar', controller.consult);

module.exports = router;