const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 8080;
const mongoose = require('mongoose');
const { Schema } = mongoose;
require('dotenv').config()




app.use(express.json())
app.use(cors())

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
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

const cartSchema = new Schema({
  items: { type: [Object], required: true, default: [] },
  userId: { type: String, default: 1 }
}, { timestamps: true });

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  username: String,
  addresses: { type: [Object], default: [] },
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }]
}, { timestamps: true });

const orderSchema = new Schema({
  items: [Object],
  shipping_charges: Number,
  discount_in_percent: Number,
  shipping_address: Object,
  total_items: Number,
  total_cost: Number,
}, { timestamps: true })

const Product = new mongoose.model('Product', productSchema);
const Cart = new mongoose.model('Cart', cartSchema);
const User = new mongoose.model('User', userSchema);
const Order = new mongoose.model('Order', orderSchema);



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

app.get('/cart', (req, res) => {
  let userId = 1;
  Cart.findOne({ userId: userId }).then((result) => {
    if (result) {
      res.send(result)
    }
    else {
      res.send({ userId: 1, items: [] })
    }
  })
})

app.post('/cart', (req, res) => {

  // const userId = req.session.user._id;  // This will be solved by Sessions
  const userId = 1;
  const item = req.body.item;
  if (!item.quantity) {
    item.quantity = 1;
  }
  Cart.findOne({ userId: userId }).then(result => {
    if (result) {
      const itemIndex = result.items.findIndex(it => it._id == item._id);
      if (itemIndex >= 0) {
        result.items.splice(itemIndex, 1, item);
      } else {
        result.items.push(item);
      }
      result.save().then(cart => {
        res.send(cart);
      })
    } else {
      let cart = new Cart();
      cart.userId = userId;
      cart.items = [item];
      cart.save().then(cart => {
        res.send(cart);
      })
    }


  })
});

app.post('/removeItem', (req, res) => {

  // const userId = req.session.user._id;
  const userId = 1;
  const item = req.body.item;
  Cart.findOne({ userId: userId }).then(result => {

    const itemIndex = result.items.findIndex(it => it._id == item._id);
    result.items.splice(itemIndex, 1);
    result.save().then(cart => {
      res.send(cart)
    })
  });

});
app.post('/emptyCart', (req, res) => {
  // const userId = req.session.user._id;
  const userId = 1;
  Cart.findOne({ userId: userId }).then(result => {
    result.items = [];
    result.save().then(cart => {
      res.send(cart)
    })
  });

});

app.listen(PORT, () => {
  console.log(`Connected to Port ${PORT}`);
})
