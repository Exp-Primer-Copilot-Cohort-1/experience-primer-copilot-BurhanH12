// Create a web server
// 1. Create a web server
// 2. Create a route for the home page
// 3. Create a route for an about page
// 4. Create a route for a 404 page
// 5. Have the 404 route print out a message to the user
// 6. Test your work

const express = require('express');
const app = express();
const port = 3000;

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
});

app.get('/help', (req, res) => {
    res.send('<h1>Help</h1>');
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: '50 degrees',
        location: 'Philadelphia'
    });
});

app.get('/help/*', (req, res) => {
    res.send('Help article not found');
});

app.get('*', (req, res) => {
    res.send('My 404 page');
});

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});