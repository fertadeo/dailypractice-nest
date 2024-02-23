// En repartidor.controller.ts
import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { RepartidorService } from './repartidor.service';
import { Repartidor } from './repartidor.entity';

@Controller('repartidores')
export class RepartidorController {
  constructor(private readonly repartidorService: RepartidorService) {}

  @Post()
  async crearRepartidor(@Body() repartidor: Repartidor): Promise<Repartidor> {
    return this.repartidorService.crearRepartidor(repartidor);
  }

  @Get()
  async obtenerRepartidores(): Promise<Repartidor[]> {
    return this.repartidorService.obtenerRepartidores();
  }

  @Get(':id')
  async obtenerRepartidorPorId(@Param('id') id: string): Promise<Repartidor> {
    return this.repartidorService.obtenerRepartidorPorId(+id);
  }

  // Puedes agregar más rutas y métodos según sea necesario
}
