# Cloudinary Tutorial

## Step One: Create an env file
Copy the environment variable from your cloundinary dashboard.

## Step Two: Node modules
Run `npm install`, making sure that you have `dotenv`, `multer`, and `cloudinary` in your package.json and require them

## Step Three: Set up Post route
Stub out a post route and create a form. Make sure the form has `enctype="multipart/form-data"`. This should hit your stub route

## Step Four: Set up Multer
```javascript
let storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}`)
  },
  destination: (req, file, cb) => {
    cb(null, '/tmp/my-uploads')
  }
})
let upload = multer({ storage })
```

## Step Five: Fill in Post Route
* Accept the file
* Upload it to Cloudinary via the cloudinary uploader

## Step Six: Do stuff with results
Results has got a lot of goods, pass secure_url to wherever you want it