const express = require('express');
const router = express.Router();
const Litter = require('../models/litter.js');

//Create a post
router.post('/', (req, res) => {

});

//Delete a post
router.delete('/:id', (req, res) => {

})

//Update a post
router.put('/:id', (req, res) => {
  Litter.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true},
    (err, updateCat) => {
      res.json(updateCat)
    }
  )
})

//Get a list of all posts
router.get('/', (req, res) => {
  Litter.find({}, (err, foundCat) => {
    res.json(foundCat)
  })
});

module.exports = router;
