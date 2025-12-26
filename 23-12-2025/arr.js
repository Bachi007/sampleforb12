var arr=[7,12,15,30,42,36,41];
var max=arr[0];

for(let a of arr){
    if(a>max){
        max=a;
    }
}

//max=7;
//12>7=> max=12
//15>12=>max=15
//30>15=> max=30
//42>30=>max=42
//36>42
//41>42
//max=42
