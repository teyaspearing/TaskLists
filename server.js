const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let tasks = [
];
let taskID = 0;

app.get("/tasks", (request, response)=> {
    response.json(tasks);
});

app.post("/tasks", (request, reponse) => {
    const newTask = {
        id: taskID++, 
        task: request.body.task
    };
    tasks.push(newTask);
    reponse.json(newTask);
}); 

app.delete("/tasks/:id", (request, response) => {
    const taskId = parseInt(request.params.id);
    tasks = tasks.filter((task) => task.id !== taskId);
    response.sendStatus(200);
});

app.listen(port,() => {
    console.log("server is running");
});


