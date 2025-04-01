import { Firestore } from '@google-cloud/firestore';
import { Task } from '../types/types';

class TaskService {
  private readonly firestore: Firestore;

  constructor() {
    this.firestore = new Firestore();
  }

  // Create a new task
  public async createTask(taskData: Task): Promise<void> {
    try {
      const tasksCollection = this.firestore.collection('tasks_coll');
      await tasksCollection.add(taskData);
      console.log('Task created successfully');
    } catch (error) {
      console.error('Error creating task:', error);
      throw error;
    }
  }

  // Get all tasks
  public async getTasks(): Promise<Task[]> {
    try {
      const tasksCollection = this.firestore.collection('tasks_coll');
      const snapshot = await tasksCollection.get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Task[];
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  }

  // Update a task
  public async updateTask(id: string, taskData: Partial<Task>): Promise<void> {
    try {
      const taskRef = this.firestore.collection('tasks_coll').doc(id);
      await taskRef.update(taskData);
      console.log('Task updated successfully');
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  }

  // Delete a task
  public async deleteTask(id: string): Promise<void> {
    try {
      const taskRef = this.firestore.collection('tasks_coll').doc(id);
      await taskRef.delete();
      console.log('Task deleted successfully');
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  }
}

export default TaskService;
