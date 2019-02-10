const express = require('express');
const data = require('./data.json');
const {
    projects
} = data;
const app = express();

// Add static resources for portfolio
app.use('/static', express.static('public'));

// Initialize view engine using pug
app.set('view engine', 'pug');

// Route for index page
app.get('/', (req, res) => {
    res.render('index', {
        projects: projects
    });
});

// Route for the about page
app.get('/about', (req, res) => {
    res.render('about');
});

// Route for project pages
app.get('/project/:id', (req, res) => {
    const {
        id
    } = req.params;
    if (id < projects.length) {
        res.render('project', {
            project: projects[id]
        });
    } else {
        res.redirect('/project-not-found');
    }
});

// Route project - This leads to project not found.
app.get('/project', (req, res) => {
    res.render('project-not-found');
});

// Route for the about page
app.get('/project-not-found', (req, res) => {
    res.render('project-not-found');
});

// Route not found error
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error Handling to show error.pug
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

// Have app to listen for browser requests.
app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});