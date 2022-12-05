const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());


// categories 
const categories = require('./data/categories.json');

const programming = require('./data/programming.json');


app.get('/programming-categories', (req, res) => {
    res.send(categories)
})

app.get('/main', (req, res) => {
    res.send(categories)
})

app.get('/programming/:id', (req, res) => {
    const id = req.params.id;
    const programmingLanguage = programming.find( prog => prog._id === id)
    res.send(programmingLanguage)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if( id === '08'){
        res.send(programming)
    }
    else{
        const category_language = programming.filter( prog => prog.category_id === id )
        res.send(category_language)
    }
})

app.get('/', (req, res) => {
    res.send('server is running now')
})

app.listen(port, () => {
    console.log('kaj kortese')
})