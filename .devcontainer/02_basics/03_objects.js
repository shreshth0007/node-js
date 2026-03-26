const mySym = Symbol("key1")

const user = {
    name : "shreshth",
    age: 19,
    [mySym] : "mykey1",
    location : "Muzaffarnagar",
    email: "shreshth.mittal@gmail.com",
    isLoggedIn : false,
    latLoginDays : ["Monday","Sunday"]
}
// console.log(user.email)
// console.log(user["email"])

// user.email = "shreshth.mittal@chatgpt.com"
// Object.freeze(user)
// user.email = "shreshth.mittal@google.com"
// console.log(user)

user.greeting = function(){
    console.log("hello user")
}
// console.log(user.greeting())
user.greetingtwo = function(){
    console.log(`hello ${this.name}`)
}
console.log(user.greetingtwo())