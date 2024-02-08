const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000

const tasks = [{"id":0,  "title": "do my homework", "status":"completed"}];

app.use(cors())
app.use(express.json())



app.get('/tasks', (req, res)=>{
    res.json(tasks);
});

app.post('/tasks', (req, res)=>{
    console.log(req.body)
    const newTask = req.body;
    tasks.push(newTask);
    res.json(tasks);
});

app.put('/tasks/:id', (req, res)=>{
    const updated = req.params;
    console.log(updated)
    tasks[updated.id] = req.body
    res.json(tasks);
});

app.delete('/tasks/:id', (req, res)=>{
    const deleted = req.params.id;
    console.log(deleted)
    tasks.splice(deleted, 1);
    res.json(tasks);
});

app.listen(port, () => {
    console.log(`Escuchando ${port}`);
 });