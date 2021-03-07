var demoId = document.querySelector("#demo");
console.log(demoId)

var demoClass = document.querySelectorAll(".demo");
console.log(demoClass)
demoClass = Array.from(demoClass);
demoClass.push(5);
console.log(demoClass)

var btnModel = document.querySelector("[data-toggle='model']");
console.log(btnModel)