const express = require('express')
const router = express.Router()

const carrosselController = require('./controllers/carroselController')

router.get('/ping',(req,res)=>{
    res.json({pong: true})
})

router.get('/todosDados', carrosselController.listCarrosselController)
router.get('/dadosCSharp', carrosselController.listCarrosselCSharpController)

module.exports = router;