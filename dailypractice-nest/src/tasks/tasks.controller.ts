import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service'
@Controller('tasks')
export class TasksController {

    constructor(private task: TasksService) {

    }

    @Get()
    getAllTasks() {
        return this.task.getAllTasks()
    }
}
