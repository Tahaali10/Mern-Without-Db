const express = require('express');
const cors = require('cors');
const app = express();
const PData = require('./data');

const PORT = 8000 || process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json(PData);
});

// Endpoint to get individual product details
app.get('/:productId', (req, res) => {
    const productId = req.params.productId;
    const productDetails = PData.find((product) => product.productId === productId);

    if (productDetails) {
        res.json(productDetails);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
})

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});
