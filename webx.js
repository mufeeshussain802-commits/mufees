username= prompt("your name");
console.log("your name is this:",username);
age=prompt("your age");
console.log("your age is this:",age)
email= prompt("em");
console.log(email);
no1= 30;
no2= 40;
console.log(no1+no2);
console.log(no1-no2);
console.log(no1*no2);
console.log(no1/no2);
comparison
let nu1= 30;
let nu2= 40;


console.log(nu1!=nu2);
console.log(nu1 < nu2);
console.log(nu1 > nu2);
console.log(nu1 <= nu2);
// console.log(nu1 >= nu2);
 let a= 20;
 if(a>=10&&a<=20){
    console.log("a is between 10 and 20");
 }else{
    console.log("a is not between 10 and 20");
 }

 let weather= "rainy";
 if(weather=="sunny"||weather=="rainy"){
    console.log("it is sunny or rainy");
 } else {
    console.log("it is not sunny or rainy");
 }
let english= parseInt(prompt("enter your english marks"));
let maths= parseInt(prompt("enter your maths marks"));
let science= parseInt(prompt("enter your science marks"));
let urdu= parseInt(prompt("enter your urdu marks"));
let physics= parseInt(prompt("enter your physics marks"));

let obt_marks= english+maths+science+urdu+physics;
let total_marks= 500;
let percentage= obt_marks/total_marks*100;
console.log( "your total marks is:", obt_marks , "your percentage is:", percentage);

if(percentage>=42){
    console.log("A+");
}else if(percentage<42 ){
    console.log("fail");
}
let a= parseInt(prompt("enter your number"));
if(a>5000){
    console.log("your number is greater than 5000");
}else if(a<5000){
    console.log("your number is less than 5000");
}


let b= parseInt(prompt("enter your number"));
if(b%2==0){
    console.log("your number is even");
}else{
    console.log("your number is odd");
}
let day: 'monday';
switch (day) {
    case monday:
       console.log('milk');
        break;
           case tuesday:
        console.log('eggs');
        break;
           case wednesday:
        console.log('krahi');
        break;
           case thursday:
        console.log('sandwitch');
        break;
           case friday:
        console.log('biryani');
        break;
           case saturday:
        console.log('pizza');
        break;
           case sunday:
        console.log('burger');
        break;

    default:
        console.log('another day');
        
        break;
}

 