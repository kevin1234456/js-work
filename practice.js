//switch statement
let mark = 80;

switch(true) {
    case mark >= 80:
        console.log("Excellent");
        break;
    case mark >= 70:
        console.log("Very Good");
        break;
    case mark >= 60:
        console.log("Good");
        break;
    default:
        console.log("Invalid");
}
//for loop
for(let i=1 ; i<=10; i++){
    console.log(i);
}
//while loop
let i=1;
while(i<=5){
     console.log(i);
     i++;
}
let j  =1;
do{
    console.log(j);
    j++;
}
while(j<=5);
//continue statement
for(let i=1; i<=10 ;i++){
   
    if(i==3){ continue;
    if(i==5){}break;
         console.log(i);
    }
}