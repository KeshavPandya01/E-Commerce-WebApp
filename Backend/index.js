const port = 3000;
import express, { json } from "express";
const app = express();
import mongoose, { connect } from "mongoose";
import jwt from "jsonwebtoken";
import multer, { diskStorage } from "multer";
import { extname } from "path";
import cors from "cors";

app.use(json());
app.use(cors());

connect("mongodb+srv://keshavpandya04:Keshav04@cluster0.zvloey6.mongodb.net/E-Commerce");

app.get("/",(req,res)=>{
    res.send("Express app is running");
})

const storage = diskStorage({
    destination: './upload/images',
    filename:(res,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage});

//Create end point
app.use('/images',express.static("upload/images"))
app.post("/upload", upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//Schema for creating products
const Products = mongoose.model("product",{
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    new_price:{
        type: Number,
        required: true
    },
    old_price:{
        type: Number,
        required: true
    }
})
app.listen(port,(error=>{
    if(!error){
        console.log('Server Running on port '+port);
    }
    else{
        console.log('Error: '+ error);
    }
}))