var express = require('express');
var router = express.Router();
const {contact} = require('../modal/skillquest')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/datacreate',async function(req, res){
  try{
    let { email, query} = req.body;

    const addContact = new contact({
email: email,
query: query
    })
    await addContact.save()

    return res.status(200).json({status: true, meassage: "data added successfully", data: addContact})
  }
  catch(error){
    res.status(500).json({error: error.message})
  }
})

module.exports = router;
