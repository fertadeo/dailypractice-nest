import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { ClienteService } from './cliente/cliente.service';
import { clienteController } from './cliente/cliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './cliente/cliente.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest-dailypractices',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // ¡Evita esto en producción!
  }),
  TypeOrmModule.forFeature([Cliente]),
    ClienteModule],
  controllers: [clienteController],
  providers: [ClienteService],
})
export class AppModule {}
