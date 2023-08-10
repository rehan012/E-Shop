const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 8080;
const mongoose = require('mongoose');
const { Schema } = mongoose;

app.use(express.json())
app.use(cors())

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://rehan:Eshop%40123@cluster0.vdzts6g.mongodb.net/eshop");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
  }
}
connectDB()

const productSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  color: { type: String },
  size: { type: String },
  details: Object,
  image: { type: String, required: true },
  images: { type: [String], required: true },
}, { timestamps: true });

const Product = new mongoose.model('Product', productSchema);


// app.get('/createProduct', (req, res) => {
//   let product = new Product({

//     name: 'Nikon Xl54',
//     price: 1200.75,
//     category: 'Camera',
//     rating: 3,
//     color: 'black',
//     size: '',
//     details: {
//       product: "",
//       warranty: "",
//       merchant: ""
//     },
//     image: 'product-4-square',
//     images: ['product-4', 'product-4-2', 'product-4-3']

//   })
//   product.save().then((success) => {
//     res.send(success)
//   }).catch(err => {
//     res.error(err)
//   })

// })







// app.get('/a', async (req, res) => {
//   try {
//     // Fetch all collections from the database
//     const dbList = await mongoose.connection.db.admin().listDatabases();
//     res.send(dbList.databases);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching collectns' });
//   }
// });

app.get('/', (req, res) => {
  Product.find({}).then((result) => {
    res.send(result)
  })
})



app.listen(PORT, () => {
  console.log(`Connected to Port ${PORT}`);
})
