export default function signUpUser(firstName="", lastName){
    return new Promise((resolve, reject) => {
        if (firstName == "simeon"){
            resolve({
                firstName: "simeon",
                lastName: "Mnaan"
            })
        }
        else{
        reject("forget about names")
        }
        
    })
}

signUpUser("simeon", "Mnaan").then(res => {
    console.log("first name is: "+ res.firstName)
    console.log(res)
}).catch(err => {
    console.log(err)
})
