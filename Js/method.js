let arrDemo = [
	'John',
	'Smith',
	20,
	true,
]

console.log("them vao cuoi", arrDemo.push('123'))
console.log("them vao daui", arrDemo.unshift('456'))
console.log("unshift",arrDemo.unshift('789'))

console.log("xoa cuoi",arrDemo.pop())

console.log("xoa dau", arrDemo.shift())
arrDemo[5]='noname'
arrDemo[arrDemo.length] = 'refresh'
console.log("array", arrDemo)
console.log("array", arrDemo[5])


let timChiSo = arrDemo.lastIndexOf('John');
console.log("chi so", timChiSo)

if(arrDemo.indexOf('Smith')===arrDemo.lastIndexOf('Smith')){
	console.log("duy nhat")
}
else{
	console.log("khong duy nhat")
}

let hoaDon = [124, 48, 268]
let tienTip = []
let finalTip = []
let sum = 0
let i=0

// for (i; i<hoaDon.length; i++){
// 	if(hoaDon[i]<50){
// 		tienTip.push(hoaDon[i]*0.2);
// 		sum = hoaDon[i] + hoaDon[i]*0.2;	
// 	}
// 	else if(hoaDon[i]>=50 && hoaDon[i]<=200){
// 		tienTip.push(hoaDon[i]*0.15);
// 		sum = hoaDon[i] + hoaDon[i]*0.15;	
// 	}
// 	else{
// 		tienTip.push(hoaDon[i]*0.1);
// 		sum = hoaDon[i] + hoaDon[i]*0.1;
// 	}
// }

// hoaDon.forEach(function Tip(item){
// 	if(item<50){
// 		tienTip.push(item*0.2);
// 		sum = item + item*0.2;	
// 	}
// 	else if(item>=50 && item<=200){
// 		tienTip.push(item*0.15);
// 		sum = item + item*0.15;	
// 	}
// 	else{
// 		tienTip.push(item*0.1);
// 		sum = item + item*0.1;
// 	}
// })
let percent
function tinhTienTip(arr){
	arr.map((item, index)=>{
		if(item<50){
			percent = 0.2
		}
		else if(item>=50 && item<=200){
			percent = 0.15
		}
		else{
			percent = 0.1
		}
		
		tienTip.push(item*percent);
		finalTip.push(item+item*percent);
		sum = item + item*percent;
	})
}
tinhTienTip(hoaDon)

console.log("tien tip", tienTip)
console.log("final tip tip", finalTip)
console.log("tong tien", sum)