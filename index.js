const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('server is running now')
})

app.listen(port, () => {
    console.log('kaj kortese')
})