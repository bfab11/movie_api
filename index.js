const express = require('express');
const morgan = require('morgan');
const app = express();

let topMovies = [
    {
        title: 'Star Wars'
    },
    {
        title: 'Lord of the Rings'
    },
    {
        title: 'Marvel\'s Avengers'
    },
    {
        title: 'Dodgeball'
    },
    {
        title: 'The Other Guys'
    },
    {
        title: 'The Sandlot'
    },
    {
        title: 'Harry Potter'
    },
    {
        title: 'Elf'
    },
    {
        title: 'School of Rock'
    },
    {
        title: 'Rush Hour'
    }
];

//get top movies
app.get('/movies', (req, res) => {
    res.json(topMovies.slice(0, 10));
});

//get starting request
app.get('/', (req, res) =>{
    res.send('Welcome to my top movies!');
});

//get documentation
app.use(express.static('public'));
app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html', {root: __dirname});
});

//logs to terminal
app.use(morgan('common'));

//error-handling middleware
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something broke!');
});

//listen for requests
app.listen(8080, () => {
    console.log('Your app is listening to port 8080.');
});