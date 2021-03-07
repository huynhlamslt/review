function handleClick(){
	console.log("co gang len");
}


var colorskin = document.getElementById("colorskin");

console.log(colorskin)

function changeColor(color){
	colorskin.setAttribute("href", color)
}

var container = document.querySelector(".container");
var temp = container.getAttribute("class")

function changeStyle(style){
	var newClass = temp + " " + style
	container.setAttribute("class", newClass)
	console.log(style)
}

var body = document.querySelector("body");

function changeBg(url){
	//console.log(url)
	var valueStyle = "background-image: url('" + url + "');";
	console.log(valueStyle);
	body.setAttribute("style", valueStyle)

}

var image = document.querySelector(".class-image");
image.setAttribute("src","")

function addClass(el, className){
	var oldClass = el.getAttribute('class');
	
	if(oldClass){
		if(oldClass.indexOf(className)==-1){
			var newClass = oldClass + " " + className;
			el.setAttribute("class", newClass)
		}
		
	}
	else{
		el.setAttribute("class", className)
	}
}

function removeClass(el, className){

}

addClass(body, 'wrapper-content')
addClass(image, 'image')
addClass(image, '')
