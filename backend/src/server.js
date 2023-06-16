import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebroutes from "./route/web";
import connectDB from "./config/connectdb"
require('dotenv').config();

let app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

viewEngine(app);
initWebroutes(app);
    
connectDB();

let port = process.env.PORT || 6969; 
//undefined => 6969
app.listen(port, () => {
    console.log("Backend NODEJS is runing on the port: " + port)

})