import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const ENV_FILE_PATH = './.env';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/sgb-ng-nest-universal/browser')
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
      //envFilePath: join(process.cwd(), '/server/.env')
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],

})
export class AppModule {

  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(cors());
  // }
}
