// let result=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("promise fulfilled")
//     },5000);
// })

// async function hello(){     
//     console.log("Hello world");
//     let p=await result;
//     console.log(p);
//     console.log("Bye!...")
// }
// hello();


console.log("A")
Promise.resolve().then(()=>
    {
        console.log("B")
        setTimeout(()=>console.log("C"),0)
    })
setTimeout(()=>console.log("D"),0)
console.log("E");

//ACDB
//ADCB
//CADB


