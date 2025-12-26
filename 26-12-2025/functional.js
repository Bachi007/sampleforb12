function mobile(mobileName,mobilePrice,mobileProcessor){
    this.mobileName=mobileName;
    this.mobilePrice=mobilePrice;
    this.mobileProcessor=mobileProcessor
}

let m1=new mobile("Oneplus 15R","44000","8 gen 5");
let m2=new mobile("Samsung s25 ultra","120000","axinos 25");
let m3=new mobile("iphone 17pro","150000","A26");

let mobilesArray=[m1,m2,m3]

    let newarr=mobilesArray.map((i)=>{
        return {
            ...i,
            mobilePrice:i.mobilePrice-1000
        }
    })
    console.log(newarr);
    // for(let obj of newarr){
    //     for(let k in obj){
    //         console.log(k+":"+obj[k])
    //     }
    // }