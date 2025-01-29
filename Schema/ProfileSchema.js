const mongoose = require("mongoose")
const profileSchmea = mongoose.Schema({
    phone:{  
        type:Number,
        require:"true"  

    },
    location:{
        type:String,
        require:"true"
    },
    shopname:{
        type:String,
        require:"true"
    }
})

const Profile = mongoose.model("Profile" ,profileSchmea)

module.exports =Profile