export default function returnHowManyArguments(...args){
var total = 0
    for (var x of args){
        total += 1;
}
return total;
}