const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const categories = require('./Categories.json');

app.get('/', async(req, res) => {
    res.send('AC Resale Server is running');
});

app.get('/categories', (req, res) => {
    res.send(categories)
})


app.listen(port, () => console.log(`AC Resale is running on port ${port}`))