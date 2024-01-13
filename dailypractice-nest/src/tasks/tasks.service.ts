import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tasks } from './tasks.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Tasks)
        private taskRepository: Repository<Tasks>,
    ) {}

    async getAllTasks(): Promise<Tasks[]> {
        return await this.taskRepository.find();
    }

    async createTask(taskData: Tasks): Promise<Tasks> {
        const newTask = this.taskRepository.create(taskData);
        return await this.taskRepository.save(newTask);
    }



    async updateTask(id: any, taskData: Tasks): Promise<Tasks> {
        const existingTask = await this.taskRepository.findOne(id);
    
        if (!existingTask) {
            return null; // Manejar el caso donde la tarea no existe
        }
    
        existingTask.title = taskData.title || existingTask.title;
        existingTask.description = taskData.description || existingTask.description;
        existingTask.status = taskData.status || existingTask.status; 
    
        return await this.taskRepository.save(existingTask); 
    }
    
}
