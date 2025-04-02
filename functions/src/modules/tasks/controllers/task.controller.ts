import { Request, Response } from 'express'
import TaskService from '../services/task.service'
import { Task } from '../types/types'

class TaskController {
  private readonly taskService: TaskService

  constructor(taskService: TaskService) {
    this.taskService = taskService
  }

  // Create a new task
  public async createTask(req: Request, res: Response): Promise<void> {
    try {
      const taskData: Task = req.body
      await this.taskService.createTask(taskData)
      res.status(201).json({ message: 'Task created successfully' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error creating task' })
    }
  }

  // Get all tasks
  public async getTasks(req: Request, res: Response): Promise<void> {
    try {
      const tasks = await this.taskService.getTasks()
      res.status(200).json(tasks)
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error fetching tasks' })
    }
  }

  // Update a task
  public async updateTask(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params
      const taskData: Partial<Task> = req.body
      await this.taskService.updateTask(id, taskData)
      res.status(200).json({ message: 'Task updated successfully' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error updating task' })
    }
  }

  // Delete a task
  public async deleteTask(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params
      await this.taskService.deleteTask(id)
      res.status(200).json({ message: 'Task deleted successfully' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error deleting task' })
    }
  }
}

const taskService = new TaskService()
const taskController = new TaskController(taskService)

export default taskController
