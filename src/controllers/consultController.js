const axios = require('axios')
const LocalStorage = require('node-localstorage').LocalStorage('./scratch');

exports.consult = async function (req, res) {

    const url = ''

    const endpointHeader = req.query.ENDPOINT;

    await axios.get(url + `${endpointHeader}`, {
        headers: { 'Authorization': LocalStorage.getItem('access_token') }
    }).then((response) => {
        res.status(200).json(response.data)
    }).catch((err) => {
        res.status(404).json(err)
    })

}