const express = require('express')
const Blog = require('./../models/Blog')
const {response} = require("express");
const router = express.Router()

router.get('/new', (request, response) => {
    response.render('new')
})

router.get('/:id', async (request, response) => {
    let  blog = await Blog.findById
})
