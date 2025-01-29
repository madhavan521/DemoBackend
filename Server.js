const http = require("http")
const express=require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT
//modules
const dealerauthrouter = require("./Router/DealerAuthenticationRouter")
const DatabaseConnection = require("./Database/DatabaseConnection")
const resellerauthrouter = require("./Router/ResellerAuthenticationRouter")
const cyclinderrouter = require("./Router/CyclinderRouter")
const addcustomerrouter = require("./Router/AddCustomerRouter")
const dealerresellerrouter = require("./Router/DealerResellerRouter")
const profilerouter = require("./Router/ProfileRouter")


//MiddleWare
app.use(express.json())
app.use(cors({
    origin: 'https://demo-frontend-gilt.vercel.app', 
    credentials: true  
  }));
app.use(cookieParser())
app.use(express.urlencoded({extended: true}));

// Routers 
app.use('/api/auth/dealer' , dealerauthrouter)
app.use('/api/auth/reseller' , resellerauthrouter)
app.use('/api/cyclinder/entry',cyclinderrouter)
app.use('/api/customer/add' ,addcustomerrouter)
app.use('/api/reseller/push',dealerresellerrouter)
app.use('/api/profile' , profilerouter)
 


// Database Connection

DatabaseConnection();

// Server Connection

const server = http.createServer(app)
server.listen(PORT ,()=>{
    console.log("Sever started listing")
})
