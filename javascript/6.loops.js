// Loops in JavaScript

for(let i=1; i<=5; i++){
    console.log(i,":Increment");
}
for(let j=5; j>=1; j--){
    console.log(j,":Decrement");
}

// while loop:

let a=6;
while(a<=10){
    console.log(a,":While");
    a++
}

// do while loop:

let e=1;
do{
    console.log(e,":Do While");
    e++
}while(e<=4);

for(let i=1; i<4;i++){
    if(i===3){
        continue; // skip the current iteration when i is 3
    }
}


for(let i=1; i<=6; i++){
    console.log(i,":Outer");
    for(let j=1; j<=3; j++){
        console.log(j,":Inner");
        for(let k=1;k<=2;k++){
            console.log(k,":Inner Inside Loop");
        }
    }
    for(let m=1; m<=2; m++){
        console.log(m,":Outer Inside Loop");
    }
}