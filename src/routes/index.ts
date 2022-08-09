import Router from 'koa-router';
import UrlShortener from './url-shortener';

const router = new Router();

router.use(UrlShortener.routes());

export default router;
