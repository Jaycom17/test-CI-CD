import { Router } from 'express';

const taskRouter = Router();

let tasks: { id: number, title: string }[] = [];
let idCounter = 1;

taskRouter.get('/', (req, res) => {
  res.json(tasks);
});

taskRouter.post('/', (req, res) => {
  const { title } = req.body;
  const newTask = { id: idCounter++, title };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

taskRouter.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  tasks = tasks.filter(task => task.id !== id);
  res.status(204).send();
});

export default taskRouter;
