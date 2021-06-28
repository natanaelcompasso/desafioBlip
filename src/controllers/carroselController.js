const carroselServices = require('../services/carrosel');

module.exports = {
    listCarrosselController: async (req,res)=>{
       try {
           const list = await carroselServices.listCarrosselServices()
           console.log(list)
           return res.status(200).send(list)
           
       } catch (error) {
           console.log(error)
           return res.status(400).send({error: 'Não conseguimos listar as informações'})
       }
    }
}