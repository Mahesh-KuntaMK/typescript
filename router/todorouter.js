"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({ todo: newTodo, todos: todos });
});
router.put('/todo/:todoid', (req, res, next) => {
    const todoid = req.params.todoid;
    const todoindex = todos.findIndex((todoitem) => todoitem.id === todoid);
    if (todoindex >= 0) {
        todos[todoindex] = { id: todos[todoindex].id, text: req.body.text };
        return res.status(200).json({ message: 'updates successufully', todos: todos });
    }
    res.status(404).json({ message: 'item not found' });
});
router.delete('todo/:deltodoid', (req, res, next) => {
    console.log(req.params.deltodoid);
    todos = todos.filter((todoitem) => todoitem.id !== req.params.deltodoid);
    res.status(200).json({ message: 'deltes todo', todos: todos });
});
exports.default = router;
