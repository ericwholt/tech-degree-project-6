const express = require('express');
const data = require('./data.json');
const {
    projects
} = data;

const app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {
        projects: projects
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        name
    });
});

app.get('/project/:id', (req, res) => {
    const {
        id
    } = req.params;
    res.render('project', {
        project: projects[id]
    });
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});