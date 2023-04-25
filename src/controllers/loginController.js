const axios = require('axios')
const LocalStorage = require('node-localstorage').LocalStorage('./scratch');

exports.login = async function (req, res) {

    const UrlLogin = ''

    const userData = {
        user: req.body.user,
        password: req.body.password
    }

    if (!userData.user) {
        return res.status(422).json({ msg: "O campo user é obrigatório" })
    }

    if (!userData.password) {
        return res.status(422).json({ msg: "O campo password é obrigatório" })
    }

    const protheusLogin = await axios.post('')

    try {
        LocalStorage.setItem('access_token', `Bearer ${protheusLogin.data.access_token}`)
        LocalStorage.setItem('refresh_token', `${protheusLogin.data.refresh_token}`)

        const token = LocalStorage.getItem('access_token');
        const decode = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
        const { exp } = decode

        if (Date.now() >= exp * 1000) {
            const protheusRefreshToken = await axios.post(`http://protheus/v1/token?grant_type=refresh_token&refresh_token=${LocalStorage.getItem('refresh_token')}`)

            try {
                LocalStorage.setItem('access_token', `Bearer ${protheusRefreshToken.data.access_token}`)
                LocalStorage.setItem('refresh_token', `Bearer ${protheusRefreshToken.data.refresh_token}`)

                axios.post(UrlLogin, userData, {
                    headers: { 'Authorization': LocalStorage.getItem('access_token') }
                }).then((response) => {
                    res.status(200).json(response.data)
                }).catch((err) => {
                    res.status(404).json(err)
                })

            } catch (err) {
                res.status(404).json(err)
            }
        } else {
            axios.post(UrlLogin, userData, {
                headers: { 'Authorization': LocalStorage.getItem('access_token') }
            }).then((response) => {
                res.status(200).json(response.data)
            }).catch((err) => {
                res.status(404).json(err)
            })
        }

    } catch (err) {
        res.status(404).json(err)
    }

}