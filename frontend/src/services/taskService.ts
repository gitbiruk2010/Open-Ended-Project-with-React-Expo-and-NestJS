import api from '../../api/api';

// Define the Task type
interface Task {
  id?: number;
  title: string;
  description: string;
  completed?: boolean;
}

export const getTasks = async (): Promise<Task[]> => {
  try {
    const response = await api.get('/tasks');
    return response.data;
  } catch (error: any) {  // Cast error to any
    console.error('Error fetching tasks:', error.response || error.message || error);
    throw error;
  }
};

export const createTask = async (task: Task): Promise<Task> => {
  try {
    const response = await api.post('/tasks', task);
    return response.data;
  } catch (error: any) {  // Cast error to any
    console.error('Error creating task:', error.response || error.message || error);
    throw error;
  }
};

export const updateTask = async (id: number, task: Task): Promise<Task> => {
  try {
    const response = await api.patch(`/tasks/${id}`, task);
    return response.data;
  } catch (error: any) {  // Cast error to any
    console.error('Error updating task:', error.response || error.message || error);
    throw error;
  }
};

export const deleteTask = async (id: number): Promise<void> => {
  try {
    await api.delete(`/tasks/${id}`);
  } catch (error: any) {  // Cast error to any
    console.error('Error deleting task:', error.response || error.message || error);
    throw error;
  }
};
