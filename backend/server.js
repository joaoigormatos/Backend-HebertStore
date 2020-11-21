import express from 'express';
import connectDB from './config/db.js';
import colors from 'colors';
import dotenv from 'dotenv';
import Product from './models/productModel.js';

dotenv.config();
connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'API está funcionando!', data: 'oi' });
});

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log(error);
  }
});

app.get('/api/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Produto não encontrado!' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Servidor iniciado na porta ${PORT}`.green.bold));
