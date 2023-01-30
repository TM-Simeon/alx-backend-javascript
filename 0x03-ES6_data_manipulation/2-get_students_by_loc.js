export default function getStudentsByLocation(array, location){
    const mylocation = location
    if (Array.isArray(array)){
        const myarray = array.filter(location)

        function location(array){
            if (array["location"] == mylocation)
            return array
        }

        return myarray
    }
    else
        return []
}