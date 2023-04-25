const port = 8081 || 8080
const app = require('./index')

app.listen(port, () => {
    console.log("Servidor conectado na porta: " + port)
})