import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.enableCors();

  console.log("path.join() : ", path.join(__dirname, ''));

  console.log("cwd: ", path.join(process.cwd(), ''));

  const configService = app.get(ConfigService);
  console.log(configService);
  const port = process.env.PORT;
  console.log( port, process.env.PORT);

  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  bootstrap().catch(err => {
    process.abort();
    console.error(err);
  });
}

