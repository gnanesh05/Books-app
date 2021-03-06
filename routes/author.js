const express =  require('express')
const router =  express.Router()
const Author = require('../models/author')
// All Authors
router.get('/',(req,res)=>{
    res.render('authors/index')
})

// New Author 
router.get('/new',(req,res)=>{
    res.render('authors/new',{author: new Author()})
})

// Create Author
router.post('/',(req,res)=>{
    res.send("create")
})



module.exports = router