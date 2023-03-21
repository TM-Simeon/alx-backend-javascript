const fs = require("fs")
const { parse } = require("csv-parse")

var path = process.argv[2]

if (!fs.existsSync(path)) {
	throw new Error("Cannot load the database")
}

// var fs1 = fs.createReadStream(path)
// 	  .pipe(parse({ delimiter: ",", from_line: 2 }))
// 	  .on("data", function (row) {
// 			var csList = []
// 			var sweList = []
// 		    if (row.includes("CS")){
// 				console.log(row)
// 			}
// 			else if(row.includes("SWE")){
// 				sweList.push("first")
// 			}
// 			console.log(csList)
// 		    })
			
// 	  .on("end", function () {
// 		      console.log("finished");
// 		    })
// 	  .on("error", function (error) {
// 		      console.log(error.message);
// 		      console.log("i got an error");
// 		    });
fs.readFile(path, 'utf8', function(err, data){
	var dataArray = data.split(/\r?\n/)
	console.log(dataArray)
	var newArray = dataArray[2].split(" ' ")
	console.log(newArray[1])

	// console.log(dataArray.split(",")[0], dataArray[2].split(",")[1])
})
// console.log(data)