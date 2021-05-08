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
        title: 'Dodgeball',
        description: 'Dodgeball: A True Underdog Story (also known simply as Dodgeball) is a 2004 American sports comedy film written and directed by Rawson Marshall Thurber and starring Vince Vaughn and Ben Stiller. The plot follows a group of misfits entering a Las Vegas dodgeball tournament to save their cherished local gym from the onslaught of a corporate health fitness chain.',
        director: 'Rawson Marshall Thurber',
        genre: 'Comedy'

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

//get movie by title
app.get('/movies/:title', (req, res) => {
    res.json(topMovies.find((topMovies) => {
        return topMovies.title === req.params.title
    }));
});

//get data about movie genre by name
app.get('/movies/genres/:genre', (req, res) => {
    res.send('Successful GET request for data about a movie genre by name')
});

//get director by name
app.get('/movies/directors/:name', (req, res) => {
    res.send('Successful GET request for information about the Director')
});

//register new user
app.post('/users', (req, res) => {
    res.send('Registration successful')
});

//update user info
app.put('/users/:username', (req, res) => {
    res.send('User ' + req.params.username + ' was successfully updated')
});

//add movie to Favorites
app.post ('/users/:username/favorites', (req, res) => {
    res.send('Movie: ' + req.params.title + ' was added to Favorites')
});

//delete movie from Favorites
app.delete ('/users/:username/favorites/:title', (req, res) => {
    res.send('Movie: ' + req.params.title + ' was deleted from Favorites')
});

//delete user
app.delete('/users/:username', (req, res) => {
    res.send('User ' + req.params.id + ' was successfully deleted')
});

//get starting request
app.get('/', (req, res) => {
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