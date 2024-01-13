import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tasks } from './tasks.entity';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    async getAllTasks(): Promise<Tasks[]> {
        return this.tasksService.getAllTasks();
    }
}
