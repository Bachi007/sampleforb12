
function person(firstName, lastName, address, qualification) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.qualification = qualification;

}

let p1 = new person("Santhi", "D", "BZA", "Mtech");
let p2 = new person("Bhaskara", "Ch", "Vizag", "MCA")
let p3 = new person("Aravind", "R", "Khammam", "Mtech")

let arr = [p1, p2, p3];

for (let p of arr) {
    if (p.qualification == "Mtech") {
        for (let k in p) {
            console.log(k + " : " + p[k]);
        }
        console.log("************")
    }
}
