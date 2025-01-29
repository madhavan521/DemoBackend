const express = require("express")
const ProtectRouter = require("../Middleware/ProtectRouter")
const { add, get, update } = require("../Controller/ProfileController")

const profilerouter =express.Router()

profilerouter.post('/add',ProtectRouter,add )
profilerouter.get('/get', ProtectRouter,get)
profilerouter.put('/update/:id', ProtectRouter,update)


module.exports = profilerouter;