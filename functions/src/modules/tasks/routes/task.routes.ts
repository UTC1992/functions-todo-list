import { Router } from 'express';
import taskController from '../controllers/task.controller';

const taskRouter = Router();

taskRouter.post('/', (req, res) => taskController.createTask(req, res));
taskRouter.get('/', (req, res) => taskController.getTasks(req, res));
taskRouter.put('/:id', (req, res) => taskController.updateTask(req, res));
taskRouter.delete('/:id', (req, res) => taskController.deleteTask(req, res));

export default taskRouter;
