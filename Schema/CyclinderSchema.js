const mongoose = require("mongoose")

const cyclinderSchema = mongoose.Schema({
    cyclinderType:{
        type:String,
        required:true
    },
    fullCyclinder:{
        type:String,
        required:true
    },
    emptyCyclinder:{
        type:String,
    },
    delivery:{
        type:String,
        default:"0"
    }
})

const CyclinderData = mongoose.model("CyclinderEntry" , cyclinderSchema)

module.exports = CyclinderData