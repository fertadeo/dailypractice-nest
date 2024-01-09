import { Body, Controller, Get, Post, Put, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { Task, TaskStatus } from './tasks.entity';
@Controller('tasks')
export class TasksController {
    [x: string]: any;

    constructor(private task: TasksService) {

    }

    @Get()
    getAllTasks() {
        return this.task.getAllTasks()
    }
    @Post()
    createTask(@Body('title') title: string, @Body('description') description: string): Task {
        return this.Tasks.createTask(title, description);
    }

    @Put(':id/status')
    updateTaskStatus(@Param('id') id: string, @Body('status') status: TaskStatus): Task {
        return this.tasksService.updateTask(id, status);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string): { success: boolean } {
        const isDeleted = this.tasksService.deleteTask(id);
        return { success: isDeleted };
    }
}
