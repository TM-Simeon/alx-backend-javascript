import { uploadPhoto, createUser } from 'utils.js';

export default function handleProfileSignup(){
    return Promise
        .all([uploadPhoto(), createUser()])
        .then(res => {
            console.log(res)
        })
        .catch(()=> console.log("signup system offline"))
}