export default function handleResponseFromAPI(promise){
    return Promise((resolve, reject)=>{
        if (promise)
            resolve({status: 200, body: "Success"})
        else
            reject("")

    })
}

const mypromise =handleResponseFromAPI();
mypromise
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })
    .finally(()=>{console.log("Got a response from the api")})