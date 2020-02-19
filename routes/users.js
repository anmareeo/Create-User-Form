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
      if (req.body.email.toLowerCase() == user.email) {
  
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
router.get('/add', function(req, res, next) {
  res.render ('delete')
});

router.get('/add', function(req, res, next) {
  res.render ('password')
});

router.post('/', function(req, res, next) {
  let user = req.body 
  user.id = users.length
  users.push(user)
  res.json(users[user.id])

});
router.patch('/', function(req, res, next) {
res.send('respond with a resource');
})
router.delete('/', function(req, res, next) {
  res.send('respond with a resource');
})
module.exports = router;
