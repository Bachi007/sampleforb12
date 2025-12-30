class person{
    greetings(){
        console.log("Hello from person");
    }
}
class student extends person{
    constructor(){
        console.log("Helloooo")
    }
    greetings(){
        super.greetings();
        console.log("Good Morning from student");
    }
    static display(){
        console.log("it is static")
    }
}
var a=new student();
student.display();
a.greetings();