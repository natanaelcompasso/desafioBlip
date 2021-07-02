const { json } = require('express');
const carroselServices = require('../services/carrosel');
const {findRepositorios} = require('../utils');

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
    },
    listCarrosselCSharpController: async (req,res)=>{
       try {
           const list = await carroselServices.listCarrosselServices()
            let filtroLinguagem = list.filter(value=>value.language == 'C#')
            let filtroTratado = findRepositorios(filtroLinguagem)
            return res.status(200).send(filtroTratado)
           
       } catch (error) {
           console.log(error)
           return res.status(400).send({error: 'Não conseguimos listar as informações'})
       }
    }


}