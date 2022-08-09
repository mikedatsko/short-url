import Router from 'koa-router';
import UrlShortener from './url-shortener.controller';

const router = new Router();

router.get('/:shortUrl', UrlShortener.getUrl);
router.post('/api/url', UrlShortener.createUrl);

export default router;
