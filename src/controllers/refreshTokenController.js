const axios = require('axios')
const LocalStorage = require('node-localstorage').LocalStorage('./scratch');

exports.refreshToken = async function (req, res) {

    const url = ''

    const hashSectionData = {
        HASHSECTION: req.body.HASHSECTION
    }

    if (!hashSectionData.HASHSECTION) {
        return res.status(422).json({ msg: "O campo hashsection é obrigatório" })
    }

    await axios.post(url, hashSectionData, {
        headers: { 'Authorization': LocalStorage.getItem('access_token') }
    }).then((response) => {
        res.status(200).json(response.data)
    }).catch((err) => {
        res.status(404).json(err)
    })

}