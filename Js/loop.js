const arrStudent = [
	{
		fullname: 'Nguyen Van A',
		math: 9,
		physics: 7,
		dtb: tinhDiemTB
	},
	{
		fullname: 'Nguyen Van B',
		math: 8,
		physics: 9,
		dtb: tinhDiemTB
	},
	{
		fullname: 'Nguyen Van C',
		math: 6,
		physics: 9,
		dtb: tinhDiemTB
	},
	{
		fullname: 'Nguyen Van D',
		math: 7,
		physics: 8,
		dtb: tinhDiemTB
	},
]

function tinhDiemTB(){
	this.average = (this.math+this.physics)/2;
	return this.average
}

for (let i = 0; i < arrStudent.length; i++) {
	//arrStudent[i].dtb = tinhDiemTB;
	arrStudent[i].dtb();
}

console.log("array", arrStudent)

const tinhDiem = function(){
		let total = 0, totalScore = 0
		for(key in this.score){
			total++;
			console.log("key = ", key)
			totalScore += this.score[key]
		}
		console.log(total, totalScore)
		this.average =  totalScore/total
	}
const studentA = {
	fullname: 'Nguyen Van A',
	year: 1992,
	score: {
		maths: 9,
		physics: 9,
		chemistry: 8
	},
	calAverage: tinhDiem
}

const studentB = {
	fullname: 'Nguyen Van B',
	year: 1992,
	score: {
		maths: 9,
		physics: 9,
		chemistry: 8,
		english: 7
	},
	calAverage: tinhDiem
}

studentA.calAverage();
studentB.calAverage();
console.log("studentA", studentA)
console.log("studentB", studentB)

console.log("=====================================")

function randomArray(n, max){
	let arr = []
	for (let i = 1; i <=n; i++) {
		let number = Math.random()*max;
		number = Math.round(number)
		arr.push(number)
	}
	return arr
}

let bills = randomArray(3, 500)
console.log("bills", bills)

const john = {
	firtsname: 'John',
	lastname: 'Smith',
	bills: randomArray(100, 500),
	calTips: function(){
		this.tips = [];
		this.totalValues = [];

		for(let i=0; i < this.bills.length; i++){
			let percent;
			if(this.bills[i]<50){
				percent = 0.2
			}
			else if(this.bills[i]>=50 && this.bills[i]<=200){
				percent = 0.15
			}
			else{
				percent = 0.1
			}
			this.tips.push(this.bills[i]*percent);
			this.totalValues.push(this.tips[i]+this.bills[i])
		}
	}
}

john.calTips()
console.log("tips", john)
