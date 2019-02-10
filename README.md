# Treehouse | Tech Degree
## Portfolio Project

### To use the project
node.js is required to use this project. If you don't have it already then you can find it here [node.js](https://nodejs.org/en/)

### node.js is installed now what?
- Open a command/terminal shell and run `npm install`. This will download the dependencies for the project.
- Once dependencies are install run `npm start`. You should get a messages `portfolio@1.0.0 filepath` and `node app.js`.
- You are ready to visit localhost:3000 through your browser of choice.

# Style Changes

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
  display: none;
}
```