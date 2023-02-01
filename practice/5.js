export default function uploadPhoto(filename){
    return new Promise((reject)=>{
        reject(`${filename} cannot be processed`)
    })
}

var res = uploadPhoto("file.jpg")
res.then(res => {
    console.log(res)
}).catch(err =>{
    console.log(err)
})