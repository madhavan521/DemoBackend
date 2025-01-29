const express= require("express")
const ProtectRouter = require("../Middleware/ProtectRouter")
const { createdata, getdata, deletedata, updatedata } = require("../Controller/CyclinderController")

const cyclinderentryrouter = express.Router()

cyclinderentryrouter.post('/create',ProtectRouter,createdata)
cyclinderentryrouter.get('/get', ProtectRouter,getdata)
cyclinderentryrouter.put('/update/:id',ProtectRouter,updatedata)
cyclinderentryrouter.delete('/delete/:id' ,ProtectRouter,deletedata)



module.exports = cyclinderentryrouter