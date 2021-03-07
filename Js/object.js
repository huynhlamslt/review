let student = {
	fullname: 'Nguyen Van A',
	year: 1990,
	scores: {
		maths: 9,
		physics: 7.5,
		chemistry: 5
	},
	callAverage: function (){
		// console.log("tinh")
		// console.log(this);
		const maths = this.scores.maths;
		const physics = this.scores.physics;
		const chemistry = this.scores.chemistry;

		return (maths + physics + chemistry)/3;
	}
};
// console.log(student)
// console.log(student.scores.maths)
let diemtb = student.callAverage();
//console.log("diem trung binh", diemtb)

let student2 = new Object();
student2.fullname = 'Nguyen Van B';
student2.year = 1992;
student2.scores = {
	maths: 10,
	physics: 6,
	chemistry: 4
}
// student2.callAverage = function(){
// 	const maths = this.scores.maths;
// 	const physics = this.scores.physics;
// 	const chemistry = this.scores.chemistry;

// 	return (maths + physics + chemistry)/3;
// 
student2.callAverage = student.callAverage;
// const dtb = student2.callAverage();
// console.log("dtb", dtb);

const objDemo = {
	'full-name': 'Nguyen Van C'
}
// console.log("demo", objDemo)
// console.log("full-name", objDemo['full-name'])


function calBMI(){
	console.log(this)
	this.bmiValue =  this.mass/(this.height*this.height);
}

const calBMI2 = function(){
	this.bmiValue =  this.mass/(this.height*this.height);
}

//console.log("typeof", typeof(calBMI()));

const john = {
	fullname: "John smith",
	mass: 59,
	height: 1.65,
	BMI: calBMI
	// calBMI: function(){
	// 	return this.mass/(this.height**);
	// }
}

const mark = {
	fullname: "Mark smith",
	mass: 70,
	height: 1.7,
	BMI: calBMI
	// calBMI: function(){
		
	// }
}

// console.log("bmi john", john.BMI())
// console.log("bmi mark", mark.BMI())

john.BMI()
mark.BMI()

if(john.bmiValue>mark.bmiValue){
	console.log("john lon hon mark")
}
else if(john.bmiValue<mark.bmiValue){
	console.log("john nho hon mark")
}
else{
	console.log("john bang mark")
}