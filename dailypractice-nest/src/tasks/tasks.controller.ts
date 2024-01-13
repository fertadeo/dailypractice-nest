import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tasks } from './tasks.entity';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    async getAllTasks(): Promise<Tasks[]> {
        return this.tasksService.getAllTasks();
    }

    @Post()
    async createTask(@Body() taskData: Tasks): Promise<Tasks> {
        return this.tasksService.createTask(taskData);
    }

    @Post(':id')
    async updateTask(@Param('id') id: string, @Body() taskData: Tasks): Promise<Tasks> {
        return this.tasksService.updateTask(id, taskData);
    }
}
