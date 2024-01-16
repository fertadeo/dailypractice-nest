import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService} from '@nestjs/config';
import * as morgan from 'morgan';


async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'))

  const configService = app.get(ConfigService)
  console.log(configService.get('PORT'))
  await app.listen(configService.get('PORT'));
}
bootstrap();
 