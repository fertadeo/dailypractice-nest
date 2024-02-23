// En repartidor.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Repartidor } from './repartidor.entity';

@Injectable()
export class RepartidorService {
  constructor(
    @InjectRepository(Repartidor)
    private repartidorRepository: Repository<Repartidor>,
  ) {}

  async crearRepartidor(repartidor: Repartidor): Promise<Repartidor> {
    return this.repartidorRepository.save(repartidor);
  }

  async obtenerRepartidores(): Promise<Repartidor[]> {
    return this.repartidorRepository.find();
  }

  async obtenerRepartidorPorId(id): Promise<Repartidor> {
    return this.repartidorRepository.findOne(id);
  }

  // Puedes agregar más métodos según sea necesario
}
