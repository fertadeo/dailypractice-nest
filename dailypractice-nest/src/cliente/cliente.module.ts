import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { clienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Cliente])],
  controllers: [clienteController],
  providers: [ClienteService]
})
export class ClienteModule {}
