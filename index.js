const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



app.get('/', async(req, res) => {
    res.send('AC Resale Server is running');
});


app.listen(port, () => console.log(`AC Resale is running on port ${port}`))