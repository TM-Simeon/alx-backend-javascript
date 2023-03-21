at the end of this project, you are expected to be able to explain to anyone how to run javascript using nodejs
use nodejs modules, use specific node js module to read files, use process to access command line arguments and the environment, create a small http server using nodejs, create a small http server using express js, create advanced routes with express js, use es6 with node js with babel-node and use nodemon to develop faster.

to export and import after much trials i discovered

module.exports.add = add  # you can use module.exports = add also, that will work
var addfn = require('./source function path')
or for multiple exports, you can used module.exports = {
add: add,
subtract: subtrack
}
you can remove the double names since the key and name match. its allowed in js

or you can use

export default function add(){...}
import add from './source function path'
using this method you have to include "type":"module" in the package.json file
which is generated when you run npm init in the current directory
