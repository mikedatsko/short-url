import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();

import Koa from 'koa';
import { koaSwagger } from 'koa2-swagger-ui';
import bodyParser from 'koa-bodyparser';
import debug from 'debug';
import { AppDataSource } from './data-source';
import router from './routes';

const log = debug('app:index');
const app = new Koa();

AppDataSource.initialize()
  .then(() => log('DB connected'))
  .catch(error => log('DB connection error:', error));

app.use(bodyParser());
app.use(
  koaSwagger({
    routePrefix: '/api/docs',
    swaggerOptions: {
      url: 'http://petstore.swagger.io/v2/swagger.json'
    }
  })
);
app.use(router.routes()).use(router.allowedMethods());

app.listen(80);
