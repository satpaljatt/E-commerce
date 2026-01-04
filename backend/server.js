const express = require('express');
const app = express();

require('dotenv').config();

const PORT = 5000;

app.get('/', (req, res) => {

    res.send('Hello from the backend it is working');

})

app.listen(PORT, () =>
{
    console.log(`Server running on port ${PORT}`)
}
);
