// // const tinderUser = new Object()
// const tinderUser ={}
// tinderUser.id = "123abc"
// tinderUser.name = "shashwat"
// tinderUser.isLoggedIn = false
// console.log(tinderUser)

// const regularUser = {
//     email : "shreshth@google.com",
//     fullname : {
//         userfullname :{
//             firstname : "shreshth",
//             lastname : "mittal"
//         }
//     }
    
// }
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)
const obj3 = {...obj1,...obj2}
console.log(obj3)
// console.log(tinderUser)
// console.log(Object.keys(tinderUser)) // give value in arr
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('name'))


const person = {
  name : "shreshth",
  gender : "male",
  age : 19
}
const{name : n , gender:g} = person
// console.log(g)

const navbar = () =>{

}