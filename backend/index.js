const express = require('express');
const axios = require('axios')

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 6000
const PRODUCT_API = process.env.PRODUCT_API;

app.get('/', (req, res) => {
    res.send('Hello user')
})
app.get('/api/products', async (req, res) => {
    const response = await axios.get(PRODUCT_API);
    const data = response.data;
    res.json(data)
})
app.get('/api/product/:id', async (req, res) => {
    const response = await axios.get(`${PRODUCT_API}/${req.params.id}`);
    const data = response.data;
    res.json(data)
})

app.listen(PORT, () => {
    console.log(`Server listening in ${process.env.NODE_ENV} mode on port ${PORT}`);

})