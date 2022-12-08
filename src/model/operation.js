import mongoose, {Schema,model} from "mongoose"

const OperationSchema = new Schema({
x: {
    type: Number,
    required: true
},
y: {
    type: Number,
    required: true
},
operation_type: {
    type: String,
    enum: ["subtraction","multiplication", "addition"],
    required: true
},

result: {
    type: Number
}
})


export default model("Operation", OperationSchema)