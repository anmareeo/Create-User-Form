var express = require('express');
var router = express.Router();
let users=[{
  id: 1,
  first: "Anmaree",
  last: "Osmond",
  password: "password",
  email:"anmaree.osmond@gmail.com"
}]

//display registration form
router.get('/adduser', function(req, res, next) {
  res.render ('adduser', {response: ''})
});

router.post('/adduser', function(req, res, next) {
  let user = {
    id: users.length,
    first: req.body.first,
    last: req.body.last,
    password: req.body.last,
    email: req.body.email
  }
  users.push(user)
  res.render ('adduser', {response: 'User Added'})
});

//display login form
router.get('/login', function(req, res, next) {
  res.render ('login',{response: ""})
});

router.post('/login', function(req, res, next) {
    let response = "invalid login"
    let foundUser = users.find((user)=>{
      let rtnVal = false
      if (req.body.email.toLowerCase() == user.email.toLowerCase()) {
  
        rtnVal = true
      }
      return rtnVal
     })

     if (foundUser!==undefined){
       if(foundUser.password===req.body.password)
        response = `${foundUser.first} ${foundUser.last}`

     }
  res.render ('login',{response})
});

//update user
router.get('/update', function(req, res, next) {
  res.render ('update',{users, user:''})
});

router.post('/update', function(req, res, next) {
  let index = req.body.id
  let user = users[index]
  for (key in user){

    if (req.body[key]!==""){
      user[key]= req.body[key]

    }
  }
  users[index] = user
  
  res.render ('update',{users, user: JSON.stringify(user)})
});

// delete user
router.get('/delete', function(req, res, next) {
res.render ('delete', {users, response:''}) //what is in the brackets is just shorthand. both users and response have the :
});

router.post('/delete', function(req, res, next) {
  let response = "User not found."
  let foundUserIndex = users.findIndex((user)=>{
    let rtnVal = false
    if (req.body.email.toLowerCase() == user.email.toLowerCase()) {
      rtnVal = true
    }
    return rtnVal
  })

if (foundUserIndex != -1){
if(users[foundUserIndex].password == req.body.password){
  response = `${users[foundUserIndex].first} ${users[foundUserIndex].last} Successfully Deleted`
       users.splice(foundUserIndex, 1)
     }

   }
  res.render ('delete', {users, response})
});











//forgot password
router.get('/password', function(req, res, next) {
  res.render ('password', {users, response:""})
});

router.post('/password', function(req, res, next) {
  let response = ""
  let foundUserIndex = users.findIndex((user)=>{
    let rtnVal = false
    if (req.body.email.toLowerCase() == user.email.toLowerCase()) {
      rtnVal = true
    }
    return rtnVal
  })

if (foundUserIndex != -1){
  response = users[foundUserIndex].password
     
   }
  res.render ('password', {users, response})
});




//This is a test======
/*
let testArray = ["one", "two", "three"]
console.log(testArray)

delete testArray[1]
console.log(testArray)*/