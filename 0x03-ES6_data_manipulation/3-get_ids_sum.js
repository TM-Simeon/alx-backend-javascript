import getListStudentsIds from "./1-get_list_student_ids.js";

export default function getStudentIdsSum(list){
    var myList = getListStudentsIds(list)
    // console.log(myList)
    const sum =myList.reduce((initial, elements)=> {
        return initial + elements;
    }, 0)

    return sum;
}