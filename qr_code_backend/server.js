// server.js
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const  cors = require("cors");
const mongoose = require('mongoose');
const Order = require('./models/Order.js');


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Catch-all handler for any request that doesn't match the API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const corsOptions = {
    origin:"http://localhost:3000"
  }
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(express.json());


try{
    mongoose.connect(
        "mongodb://0.0.0.0:27017/qr-scanner",
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
} catch (e) {
    console.log("could not connect");
}

  app.post('/submit-order', async (req, res) => {
    const { tableNumber, order } = req.body;

    const total = order.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    const newOrder = new Order({
      tableNumber,
      items: order.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total,
    });
  
    try {
      await newOrder.save();
      res.status(200).send('Order received');
    } catch (error) {
      console.error('Error saving order:', error);
      res.status(500).send('Error saving order');
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
