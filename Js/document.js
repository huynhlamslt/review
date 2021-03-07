var demo = document.getElementById("demo")
console.log(demo)
var demoClass = document.getElementsByClassName("demo")

//demoClass.push(5)
console.log(demoClass)
var arrDemo = Array.from(demoClass);
arrDemo.push(6)
console.log(arrDemo)
// for(let i = 0; i<demoClass.length; i++){
// 	console.log(demoClass[i])
// }

var div = document.getElementsByTagName("div")
console.log(div)