var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
    id: 1,
    description: 'GET IN SHAPE',
    completed: false
}, {
    id: 2,
    description: 'eat your gredgdables ya dingus',
    completed: false
}, {
    id: 3,
    description: 'not every day is your dad',
    completed: true
}];

app.get('/', function (req, res) {
    res.send('TODO API Root');
});

// GET /todos
app.get('/todos', function (req, res) {
    res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', function (req, res) {

    var todoID = parseInt(req.params.id, 10);
    var foundTodo;

    for (var i = 0; i < todos.length; i++) {

        if (todos[i].id === todoID) {
            foundTodo = todos[i];
            break;
        }
    }

    if (foundTodo) {
        res.json(foundTodo);
    } else {
        res.status(404).send();
    }
});

app.listen(PORT, function () {
    console.log('Express listening on port ' + PORT);
});
