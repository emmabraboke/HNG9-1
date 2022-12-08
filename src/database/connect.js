import mongoose from "mongoose"
import { mongo_uri } from "../../config/index.js"

const connect = async ()=>{
    try {
        await mongoose.connect(mongo_uri)
        console.log("database connected")
    } catch (error) {
        console.log(error)
    }
    
}


export default connect