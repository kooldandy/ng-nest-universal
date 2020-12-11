import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ListingsAndReviewModule } from './modules/listingsAndReviews.module';
import { AuthModule } from './modules/auth/auth.module';

//const ENV_FILE_PATH = './.env';

const uri = 'mongodb+srv://MONGOSGB:JxUc65sZunZjGbv@cluster-sgb.spdxf.mongodb.net/sample_analytics?retryWrites=true&w=majority';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/sgb-ng-nest-universal/browser'),
    }),
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   envFilePath: '.env'
    // }),
    MongooseModule.forRoot(uri, {
      connectionName: 'cats',
    }),
    //ListingsAndReviewModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {

  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(cors());
  // }
}
