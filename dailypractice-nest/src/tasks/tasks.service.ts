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
}
