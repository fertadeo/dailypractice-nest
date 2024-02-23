import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';
import { RepartidorService } from 'src/repartidor/repartidor.service';

@Injectable()
export class ClienteService {
    deleteCliente: any;
    repartidorService: any;
    constructor(
        @InjectRepository(Cliente)
        private clienteRepository: Repository<Cliente>,
        
    ) {}

    async getAllCliente(): Promise<Cliente[]> {
        return await this.clienteRepository.find();
    }

    async createCliente(clienteData: Cliente): Promise<Cliente> {
        const newCliente = this.clienteRepository.create(clienteData);
        return await this.clienteRepository.save(newCliente);
    }



    async updateCliente(id: any, clienteData: Cliente): Promise<Cliente> {
        const existingCliente = await this.clienteRepository.findOne(id);
    
        if (!existingCliente) {
            return null; // Manejar el caso donde la tarea no existe
        }
    
        existingCliente.nombreCliente = clienteData.nombreCliente || existingCliente.nombreCliente;
        existingCliente.direccionCliente = clienteData.direccionCliente || existingCliente.direccionCliente;
        existingCliente.telefonoCliente = clienteData.telefonoCliente || existingCliente.telefonoCliente; 
    
        return await this.clienteRepository.save(existingCliente); 
    }
    

    async asignarRepartidor(clienteId, repartidorId): Promise<Cliente> {
        const cliente = await this.clienteRepository.findOne(clienteId);
        if (!cliente) {
          throw new NotFoundException(`Cliente con ID ${clienteId} no encontrado`);
        }
    
        const repartidor = await this.repartidorService.obtenerRepartidorPorId(repartidorId);
        if (!repartidor) {
          throw new NotFoundException(`Repartidor con ID ${repartidorId} no encontrado`);
        }
    
        cliente.repartidor = repartidor;
        return this.clienteRepository.save(cliente);
      }
}
