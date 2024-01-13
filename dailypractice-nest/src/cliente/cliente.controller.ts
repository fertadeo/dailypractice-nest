import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.entity';

@Controller('clientes')
export class clienteController {
    constructor(private readonly clienteService: ClienteService) {}

    @Get()
    async getAllcliente(): Promise<Cliente[]> {
        return this.clienteService.getAllCliente();
    }

    @Post()
    async createTask(@Body() taskData: Cliente): Promise<Cliente> {
        return this.clienteService.createCliente(taskData);
    }

    @Post(':id')
    async updateTask(@Param('id') id: string, @Body() taskData: Cliente): Promise<Cliente> {
        return this.clienteService.updateCliente(id, taskData);
    }
}
