import { Injectable } from '@nestjs/common';
import {Task, TaskStatus} from './tasks.entity'
@Injectable()
export class TasksService {

    private task: Task[] = [{
        id: 1,
        title: 'primer tarea desde Nest',
        description: 'Descripcion',
        status: TaskStatus.PENDING

    }]

    getAllTasks() {
        return this.task; 
    }
    createTasks(title: string, description: string) { 
        const task = {
            id: 2,
            title,
            description,
            status: TaskStatus.PENDING
        }
        this.task.push
    }
    updateTasks() { }
    deleteTasks() { }
}
