const {Router} = require("express")
const router = Router()
const Blog = require('./../models/Blog')
const multer = require("multer")
const fs = require('fs')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./client/public/uploads/");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const upload = multer({storage: storage})

router.get('/', async (request, response) => {
    let blog = await Blog.find()
    response.json(blog)
})

router.post("/addblog", upload.single("myfile"), (req, res) => {
    const newBlog = new Blog({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        img: req.file.originalname
    })

    newBlog
        .save()
        .then(blog => res.json("The Article ADD!!!"))
        .catch(err => res.status(400).json(`Error my: ${err}`))
})

router.delete('/deleteblog/:id', async (request, response) => {
    try {
        const blog = await Blog.findOneAndDelete({_id: request.params.id})
        response.json(blog)
        fs.unlinkSync(`./client/public/uploads/${blog.img}`)

    } catch (error) {
        console.log(error)

    }
})

module.exports = router