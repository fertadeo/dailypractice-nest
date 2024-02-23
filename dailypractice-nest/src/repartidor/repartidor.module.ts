// En repartidor.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repartidor } from './repartidor.entity';
import { RepartidorService } from './repartidor.service';
import { RepartidorController } from './repartidor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Repartidor])],
  providers: [RepartidorService],
  controllers: [RepartidorController],
})
export class RepartidorModule {}
