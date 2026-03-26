//  function Name(){
//     console.log("S")
//     console.log("H")
//     console.log("R")
//     console.log("E")
//     console.log("S")
//     console.log("H")
//     console.log("T")
//     console.log("H")
//  }
// //  Name()
// function addnum(num1,num2){ //parameters
// console.log(num1+num2)
// }
// addnum(1,3)// arguments

// function user(username = "krishna"){
//   if(!username){
//     console.log("please enter a username")
//     return
//   }  
//   return (`${username} just loggedIn`)
// }
// console.log(user())

// const user = {
//     username : "shreshth",
//     prices : 499
// }
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and prices are ${anyobject.prices}`)
}
handleObject({
    username: "shreshth",
    prices:999
})