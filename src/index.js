import express from "express"
import {port} from "../config/index.js"
import cor from "cors"
import connect from "./database/connect.js"
import indexRoute from "./routes/index.js"

const app = express()
app.use(express.json())

app.use(cor({
    origin: "*"
}))

app.use("/api/v1", indexRoute)
app.use((req,res)=>{
    res.send("route not found")
})

const Port = port || 5000

app.listen(Port,async ()=>{
    await connect()
    console.log(`server is running on http://localhost/${Port}`)
})

