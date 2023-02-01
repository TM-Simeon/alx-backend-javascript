import { uploadPhoto, createUser } from './utils.js';

// export default function handleProfileSignup(){
//     return Promise
//         .all([uploadPhoto(), createUser()])
//         .then(res => {
//             console.log(res)
//         })
//         .catch(()=> console.log("signup system offline"))
// }

let promises = [uploadPhoto(), createUser()]
Promises.all(promises)
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log(err))