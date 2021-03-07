let age = 0;
//debugger;
function tinhTuoi(year){
	return 2020 - year;
}

let tinhtuoi2 = function(year){
	return 2020-year;
}

let tinhtuoi3 = (year) =>{
	return 2020-year;
}

const write = (name, job) =>{
	switch(job){
		case 'teacher': console.log(name, "la giao vien");
			break;
		case 'designer': console.log(name, "la nha thiet ke");
			break;
		default: console.log(name, "la lao dong tu do");
			break;
	}
}

write('bom','designer')

let tuoi = tinhtuoi3(1985);
console.log("tuoi", tuoi) 