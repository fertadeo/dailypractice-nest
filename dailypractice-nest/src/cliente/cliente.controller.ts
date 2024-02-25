import { Controller, Get, Post, Param, Body, Delete, Put} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.entity';

@Controller('cliente')
export class clienteController {
    constructor(private readonly clienteService: ClienteService) {}

    @Get()
    async getAllcliente(): Promise<Cliente[]> {
        return this.clienteService.getAllCliente();
    }

    @Post()
    async createCliente(@Body() clienteData: Cliente): Promise<Cliente> {
        return this.clienteService.createCliente(clienteData);
    }

    @Put(':id')
    updateCliente(@Param('id') id: string, @Body() clientData: Cliente): Promise<Cliente> {
        return this.clienteService.updateCliente(id, clientData);
        
    }

    @Delete(':id')
deleteCliente(@Param('id') id: string): Promise<void> {
    return this.clienteService.deleteCliente(id);
}

@Post(':id/asignar-repartidor/:repartidorId')
async asignarRepartidor(@Param('id') id: string, @Param('repartidorId') repartidorId: string): Promise<Cliente> {
  return this.clienteService.asignarRepartidor(+id, +repartidorId);
}
}







