let student={
    studentName:"John",
    studentClass:"Btech cse",
    studentAge:22,
    studentAddress:"Hyd",
    details:function(score,grade){
        return `${this.studentName} and he scored ${score},got ${grade} and in his ${this.studentClass}`
    }
}

let student2={
     studentName:"Jack",
    studentClass:"Btech ece",
    studentAge:22,
    studentAddress:"vskp",
}
//console.log(student.details())
let result=student.details.bind(student2,98,"A grade")
console.log(result());
