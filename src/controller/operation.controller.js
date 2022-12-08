import Operation from "../model/operation.js"

export const createOperation = async (req, res) =>{
    try {
    let {operation_type, x, y} = req.body
    const operationFields = {
        "add": "+",
        "addition": "+",
        "subtraction": "-",
        "subtract": "-",
        "minus": "-",
        "multiplication": "*",
        "multiply": "*",
        "times": "*"
    }

    let result
    if(operation_type){
        let operatorType
        let operator = operation_type.split(" ")
        for (let x of operator){
            if(operationFields[x]) {
                operatorType = operationFields[x]
                break
            }
        }

        if(x && y){
            if(operatorType === "+"){
                result = x + y
                operation_type = "addition" 

            }
            
            else if(operatorType === "-"){
                result = x - y
                operation_type = "subtraction"
            }

            else if(operatorType === "*"){
                result = x * y
                operation_type = "multiplication"
            }

        }
    }


    
    
    const operation = await (await Operation.create({x,y,slackUsername: "@emmaspi", result, operation_type }))
    res.status(200).json({slackUsername: "@emmaspi", result: operation.result, operation_type: operation.operation_type })

    } catch (error) {
        res.json(error.message)
    }
    
}