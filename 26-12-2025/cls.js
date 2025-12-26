class student{
    constructor(username){
        this.username=username;
    }
}
class employee extends student{

    constructor(username,age,qualification){
        super(username);
        this.age=age;
        this.qualification=qualification;
    }
    details(){
        return `${this.username} and he is ${this.age} years old, completed ${this.qualification}`
    }
}

var e=new employee("Jack","25","MCA");
console.log(e.details());
