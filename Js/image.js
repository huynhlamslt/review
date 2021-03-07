var img = "";

var image = document.querySelector(".image");
//Thay đổi thuộc tính có sẵn
image.setAttribute("src", img);
image.setAttribute("alt", "anh");
image.setAttribute("width", 100);
image.setAttribute("title", "anh");
console.log(image)

var dataTitle = Array.from(document.querySelectorAll("[data-title]"));
var temp = '';

for(var index=0; index< dataTitle.length; index++){
	temp = temp + dataTitle[index].getAttribute("data-title") + ' ';
}

document.getElementById("goto").setAttribute("data-title", temp.trim());
console.log(temp.trim())
//console.log(dataTitle)

console.log("image", image.getAttribute("class"))