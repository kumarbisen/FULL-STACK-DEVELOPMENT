console.log("This is a tutorial 5")
function greet(name, greetText="Greeting from javascript"  )
{
    console.log(greetText + " " + name)
    console.log(name + " is a good boy")

}

let name1 = "vivek bisen"
let name2 = "abhi singh"
let name3 = "arun singh"
let name4 = "varun kumar"
let greetText1 = "Good Morning";
greet(name1 , greetText1);
greet(name2 , greetText1);
greet(name3 , greetText1);
greet(name4, greetText1);
// let returnVal = greet(name3);
// console.log(returnVal);
// function does't return anything,
//  you have to pass a argument to return;

function sum(a,b,c){
    let d = a+b+c;
    return d;
}
let returnVal = sum(1,2,3)
console.log(returnVal);


// Quiz

function size(a,b){
    if (a<b) {
        console.log("you are smaller than me");
        
    } else {
        log("you are bigger than me")
    }
   
}

let compareVal= size(5,9)
console.log(compareVal);