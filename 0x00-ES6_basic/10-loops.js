export default function appendToEachArrayValue(array, appendString) {
    var count = 0;
    for (var idx of array) {
      var value = idx;
      array[count] = appendString + value;
      count += 1;
    }
  
    return array;
  }