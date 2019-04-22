require('dotenv').config()

// Require needed Modules
const cloudinary = require('cloudinary')
const express = require('express')
const layouts = require('express-ejs-layouts')
const multer = require('multer')

// Set up multer's storage/memory locations
let storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}`)
  },
  destination: (req, file, cb) => {
    cb(null, '/tmp/my-uploads')
  }
})
let upload = multer({ storage })

// Declare express app
const app = express()

// Settings and middleware
app.set('view engine', 'ejs')
app.use(layouts)

// GET / Home page
app.get('/', (req, res) => {
  res.render('index', { recentUpload: "" })
})

// POST / a place to send the image data
app.post('/', upload.single('myFile'), (req, res) => {
  console.log(req.file)

  cloudinary.uploader.upload(req.file.path, result=>{
    res.render('index', { recentUpload: result.secure_url })
  })
})

// Listen on port 3000
app.listen(3000)
