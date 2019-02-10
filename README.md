# Treehouse | Tech Degree
## Portfolio Project

### To use the project
node.js is required to use this project. If you don't have it already then you can find it here [node.js](https://nodejs.org/en/)

### node.js is installed now what?
- Open a command/terminal shell and run `npm install`. This will download the dependencies for the project.
- Once dependencies are installed run `npm start`. You should get a messages `portfolio@1.0.0 filepath` and `node app.js`.
- You are ready to visit localhost:3000 through your browser of choice.

# Style Changes

### Added:
```
.portfolio-index .cell {
  -webkit-transition: all 500ms ease-in-out;
  -moz-transition: all 500ms ease-in-out;
  -o-transition: all 500ms ease-in-out;
  transition: all 500ms ease-in-out;
}
```
### Added:
```
body {
  background-color: lightgray;
}
```

### Added:
```
.portfolio-me {
  background-color: #2B5797;
}
```

### Changed
```
.portfolio-me {
    color: #fff;
}
```

### Added:
```
.portfolio-index .cell:hover {
  -webkit-transition: opacity 200ms ease-out .5s;
  -moz-transition: opacity 200ms ease-out .5s;
  -o-transition: opacity 200ms ease-out .5s;
  transition: opacity 200ms ease-out .5s;
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
  text-shadow:
    -.5px -.5px 0 #fff,
    .5px -.5px 0 #fff,
    -.5px .5px 0 #fff,
    .5px .5px 0 #fff;
}
```
### Added:
```
.portfolio-index .cell:hover h5 {
  -webkit-transition: opacity 0s ease-in;
  -moz-transition: opacity 0s ease-in;
  -o-transition: opacity 0s ease-in;
  transition: opacity 0s ease-in;
  text-align: center;
  opacity: 0;
}
```
### Added:

logo to layout.pug
project-not-found.pug file and route for /project. Also if someone enters invalid id in route it will route to project-not-found