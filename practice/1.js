export default function getFullResponseFromAPI(success){
    return new Promise((resolve, reject) => {
        if (success == true){
            resolve({status : 200, body: 'Success'})
        }
        else
            {
                // var error = new Error("the api is not")
                // reject(error)
                reject('The fake API is not working currently')
            }
    })
}

getFullResponseFromAPI(false).then(response => {
    console.log("success"+response)
}).catch(err =>{
    console.log(err)
})
// .finally(console.log("got a response from the api"))

// const promise = Promise.resolve();
// getFullResponseFromAPI(promise)