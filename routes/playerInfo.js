const {Router} = require('express')
const call = require('../services/apexService')

const router = Router()

router.get('/holaxd', async (req, res) => {
    const data = await call()
    res.send(data)
})

router.get('/', (req, res) => {
    res.send("<h1>Hola mundo</h1>")
})

module.exports = router