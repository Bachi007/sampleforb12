var marvel=["Ironman", "Capt America", "Thor","Thor", "Hulk", "dr Strange", "Thor","Black Panther", "wonder woman", "spidey man"];

var heros=["Batman","superman","joker",...marvel]//spread


function add(...arr){
        return arr.reduce((acc,i)=>acc+i);
}

console.log(add(2,3));
console.log(add(2,3,4,5,6,7,8))//resr