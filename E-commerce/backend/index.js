const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mutler = require("multer");
const path = require("path");
const jwt = require("jsonwebtoken");
const exp = require("constants");
const { type } = require("os");
const Product = require("./Models/Product");
const { login, signup } = require("./controllers/userController");

dotenv.config();
//middleware
app.use(express.json());
app.use(cors());

//App creation
app.get("/", (req, res) => {
  res.send("Express is Running");
});

//jimage storage engine
const storage = mutler.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = mutler({ storage: storage });
//creating Uploads
app.use("/images", express.static(`upload/images`));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:9000/images/${req.file.filename}`,
  });
});

mongoose
  .connect(process.env.MONGO_URL)
  .then((result) => console.log("MongoDB Connected Successfully"))
  .catch((error) => console.log("Not Connected to DataBase ERROR!"));

app.listen(9000, () => {
  console.log("Server Is Running");
});

//Creating api for Add Product
app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  try {
    const newproduct = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });
    const product = await newproduct.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Creating api for remove Product
app.delete("/removeproduct/:id", (req, res) => {
  const id = req.params.id;

  Product.findByIdAndDelete({ _id: id })
    .then((resp) => res.json(resp))
    .catch((err) => res.json(er.message));
});
//Creating api for get all Product
app.get("/allproduct", async (req, res) => {
  try {
    const allproduct = await Product.find({});
    res.status(200).json(allproduct);
  } catch {
    res.status(500).json("Can't Find All Products");
  }
});
//get ppoular product
app.get("/popularproducts", async (req, res) => {
  try {
    const product = await Product.find({ category: "women" });
    const popularproducts = product.slice(0, 4);
    res.status(200).json(popularproducts);
  } catch {
    res.status(500).json("Can't Find Popular Products");
  }
});
//get latest product
app.get("/latestproducts", async (req, res) => {
  try {
    const product = await Product.find({ category: "men" });
    const popularproducts = product.slice(4, 12);
    res.status(200).json(popularproducts);
  } catch {
    res.status(500).json("Can't Find Popular Products");
  }
});
//

//signup ROutes
app.post("/signup", signup);

//Login
app.post("/login", login);
