import { Injectable } from '@nestjs/common';
import {Task, TaskStatus} from './tasks.entity'
@Injectable()
export class TasksService {

    private task: Task[] = [{
        id: '1',
        title: 'primer tarea desde Nest',
        description: 'Descripcion',
        status: TaskStatus.PENDING

    }, 
    {
        id:'2',
        title: 'segunda tarea',
        description:'Descripcion de la segunda tarea',
        status: TaskStatus.IN_PROGRESS
    }]

    getAllTasks() {
        return this.task; 
    }


    getTaskById(id: string): Task {
        return this.task.find(task => task.id === id);
    }


    createTasks(title: string, description: string) { 
        const task = {
            id: (this.task.length + 1).toString(), // Use a proper ID generation logic
            title,
            description,
            status: TaskStatus.PENDING
        }
        this.task.push
    }
    updateTask(id: string, status: TaskStatus): Task {
        const taskToUpdate = this.getTaskById(id);
        if (taskToUpdate) {
            taskToUpdate.status = status;
        }
        return taskToUpdate;
    }
    deleteTask(id: string): boolean {
        const initialLength = this.task.length;
        this.task = this.task.filter(task => task.id !== id);
        return this.task.length !== initialLength;
    }
}
