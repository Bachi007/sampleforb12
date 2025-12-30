// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
   
// }
// console.log(add(2)(3)(4));

function offerPrice(price,offer){
    return price-price*offer
}
console.log(offerPrice(1000,0.1))
console.log(offerPrice(1200,0.1))
console.log(offerPrice(1500,0.1))

//here every time we need to pass offer value even it is same



function offerPrice(offer){
   return function(price){
     return price-price*offer;
   }
}
let tenpercent=offerPrice(0.1);
console.log(tenpercent(1000))
console.log(tenpercent(1200))
console.log(tenpercent(1500))

