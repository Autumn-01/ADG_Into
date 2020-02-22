const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send();
});

app.get('/:name', (req, res) => {
    res.send('Hello ' + req.params.name);
});

app.get('/:name/:age', (req, res) => {
    var descript = " ";
    if(req.params.age < 13)
    descript = "Child";
    else if(req.params.age < 20)
    descript = "Teen";
    else
    descript = "Adult";

    res.send('Hello ' + req.params.name + 'You are a' + descript);
});

app.post((req, res) => {
    var descript = " ";
    if(req.params.age < 13)
    descript = "Child";
    else if(req.params.age < 20)
    descript = "Teen";
    else
    descript = "Adult";

    res.send('Hello ' + req.params.name + 'You are a' + descript);
})

app.listen(3000, () => console.log('Listening to port 3000...'));