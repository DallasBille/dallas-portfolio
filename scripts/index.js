
const navList = document.getElementById("js-nav")
const navBarToggle = document.getElementById("js-navbar-toggle")
const url = document.location.href.split("/").pop()
const allNavs = document.getElementsByClassName("nav-links")


var i=0;
for(i=0;i<allNavs.length; i++){
    let spliced = allNavs[i].href.split("/").pop()
    if(spliced === url){
        allNavs[i].className = "current"
    }
}
navBarToggle.addEventListener("click", (event) => {
    navList.classList.toggle("active")
})

// var unex = function unexecutedFunction(){
//                 return 50
//             }
// hoistingAndCallbackExample(unex)
//
// function hoistingAndCallbackExample(callback){
//     console.log(callback() * 2, "should be 100");
// }



// =================CallBack Function Examples =================

// let first = function(){
//     console.log("this is the log of the first function, being called in second function");
// }

// let second = function(placeholder){
//     console.log("log from second function");
//     // this is the log from "first function"
//     placeholder()
// }
//
// second(first)


// ==================hoisting=====================
// double(25)
//
// function double(number){
//     console.log(number * 2);
//     return number * 2
// }
// ==================hoisting========
// =================fetch for StockView==================

// fetch('http://127.0.0.1:8000/api/stock/')
//     .then(res => res.json())
//     .then(stocks => console.log(stocks.objects))

// =========== RECURSIVE FUNCTION
// function printString(string){
//     console.log(string[0]);
//     debugger
//     if(string.length > 1){
//          string = string.substring(1,string.length)
//         printString(string)
//     } else {
//         return true
//     }
//
// }
// printString("thisisastring")

// function reverseString(string){
    // your making a new string so you have to make an empty one.
    // we need to bring everything at the end of the string to the front,
    // so i = string.length - 1 is the last index. As long as i is greater than or equal to zero (the lowest index), decrement i. Each iteration, the last item is put first until after i = index 0.
    // for(i = string.length-1; i>=0 ; i--){
        // string += string[i]
        // debugger
    // }
    // return newString
// }

function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("spaces between"))


console.log("Welcome to my website!")
console.log("I'm glad you could join me!")
console.log("If you need a developer let me know, I'm always interested in an opportunity.")
