import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TasksService } from './tasks/tasks.service';
import { TasksController } from './tasks/tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tasks } from './tasks/tasks.entity';

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
  TypeOrmModule.forFeature([Tasks]),
    TasksModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class AppModule {}
