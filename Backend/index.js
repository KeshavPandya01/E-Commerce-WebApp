const port = 3000;
import express, { json } from "express";
const app = express();
import mongoose, { connect } from "mongoose";
import jwt from "jsonwebtoken";
import multer, { diskStorage } from "multer";
import { extname } from "path";
import cors from "cors";
import { triggerAsyncId } from "async_hooks";

app.use(express.json());
app.use(cors());

// connect("mongodb+srv://keshavpandya04:Keshav04@cluster0.zvloey6.mongodb.net/E-Commerce");
connect("mongodb+srv://keshavpandya04:Keshav04@cluster0.5u7mqxh.mongodb.net/E-Commerce");

app.get("/", (req, res) => {
    res.send("Express app is Running");
})

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage });

//Create end point
app.use('/images', express.static("upload/images"))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

//Schema for creating products
const Product = mongoose.model("product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    }
})

app.post("/addproduct", async (req, res) => {
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id  = last_product.id +1 ;
    }
    else{
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price
    });
    console.log(product);
    await product.save();
    console.log('saved');
    res.json({
        success: true,
        name: req.body.name,
    });

})

app.post("/removeproduct",async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({

        success: true,
        name: req.body.name
    })
});

//Creating API for getting all products
app.get("/allproducts", async (req,res)=>{
    let products = await Product.find({});
    console.log("All products fetched");
    res.send(products);
});
app.listen(port, (error => {
    if (!error) {
        console.log('Server Running on port ' + port);
    }
    else {
        console.log('Error: ' + error);
    }
}))