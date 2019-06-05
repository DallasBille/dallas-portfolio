
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
