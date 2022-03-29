const express = require('express')
const Client = require('../model/client.model')

const router = express.Router()

router.get("",async function(req, res){
    const client = 'yo'
    return res.send({client})
})

module.exports =router