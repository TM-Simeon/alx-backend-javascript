export default function getListStudentsIds(array){
    if (Array.isArray(array) ){
        const result = array.map(getid)

        function getid(object){
            return object["id"]
        }

        return result;}
    else
        return []
}