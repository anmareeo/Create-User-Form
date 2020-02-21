var express = require("express");
var router = express.Router();
//user array
let { users } = require("../../../db/arrayData");

/* add user routes*/
//display user form
//http://localhost:3001/api/v1/users/
//display registration form

router.get("/", function(req, res, next) {
  res.json(users); // returns the list of users
});

router.get("/:id", function(req, res, next) {
  let id = req.params.id;
  let rtnVal = users;
  if (id !== undefined) {
    rtnVal = users[id];
  }

  res.json(rtnValue);
});

// Create User
router.post("/", function(req, res, next) {
  let user = req.body;
  user.id = users.length;
  users.push(user);
  res.json(user); // return the added user
});

// delete
router.delete("/:position", function(req, res, next) {
  let position = req.params.position;

  users.splice(position, 1);
  //res.json(deletedUser) // returns the deleted user
  res.json(users);
});

// patch
  router.patch('/:id', function(req, res, next) {
    let index = req.params.id
    let user = users[index]
    for (let key in user){
  
      if (req.body.hasOwnProperty(key)){
        user[key]= req.body[key]
  
      }
    
    users[index] = user
    }
    res.json(user)
  });
 
module.exports = router;




//=============================================================================
/*
router.get('/:id', function(req, res, next) {
  let id = req.params.id
  let rtnVal =  {}
  if (id !== undefined){

    rtnValue = users[id]
  }
res.json(rtnVal)
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



//update user
router.get('/update', function(req, res, next) {
  res.render ('update',{users, user:''})



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

  if (foundUserIndex != -1) {
    response = users[foundUserIndex].password;
  })
  res.render("password", { users, response });
});

module.exports = router;
*/
