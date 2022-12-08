
export const getUser = (req, res) =>{
    const user =  { 
        "slackUsername": "@emmaspi",
        "backend": true, 
        "age": 24, 
        "bio": "I'm result oriented backend developer"
     }

     res.status(200).json(user)
}