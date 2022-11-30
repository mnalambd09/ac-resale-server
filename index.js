const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const categories = require('./Categories.json');
const product = require('./Product.json')

app.get('/', async(req, res) => {
    res.send('AC Resale Server is running');
});

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/product', (req, res) => {
    res.send(product)
})


app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    const selectedProduct = product.filter(pro => pro.category === id);
    res.send(selectedProduct)
    console.log(req.params.id);
})

app.listen(port, () => console.log(`AC Resale is running on port ${port}`))