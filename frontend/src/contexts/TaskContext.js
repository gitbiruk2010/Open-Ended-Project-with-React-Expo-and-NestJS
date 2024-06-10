import React, { createContext, useState, useEffect } from 'react';
import { getTasks, createTask, updateTask as updateTaskService, deleteTask as deleteTaskService } from '../services/taskService';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const data = await getTasks();
            setTasks(data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const addTask = async (title, description) => {
        try {
            const newTask = { title, description };
            const createdTask = await createTask(newTask);
            setTasks([...tasks, createdTask]);
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const updateTask = async (id, newTitle, newDescription) => {
        try {
            const updatedTask = { title: newTitle, description: newDescription };
            await updateTaskService(id, updatedTask);
            fetchTasks();
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const deleteTask = async (id) => {
        try {
            await deleteTaskService(id);
            fetchTasks();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};