import { Context } from 'koa';
import debug from 'debug';
import { AppDataSource } from '../../data-source';
import { UrlItem } from '../../entity/UrlItem';
import { random } from '../../libs/random';

const log = debug('app:api:url-shortener');

export class UrlShortenerController {
  constructor() {}

  async createUrl(ctx: Context) {
    log('createUrl', ctx.request.body);

    try {
      const { url } = ctx.request.body;

      if (!url) {
        throw `404: No not found`;
      }

      const r = random(5);
      const urlString = new URL(url);

      const currentUrl = await AppDataSource.getRepository('UrlItem').findOne({
        where: { short: r }
      });

      if (currentUrl) {
        currentUrl.original = urlString;
        await currentUrl.save();
      } else {
        const urlItem = new UrlItem();
        urlItem.original = urlString;
        urlItem.short = r;
        await AppDataSource.manager.save(urlItem);
      }

      ctx.body = `Saved! Short URL: http://localhost:5000/${r}`;
    } catch (error: any) {
      ctx.status = error.statusCode || error.status || 500;
      ctx.body = error.message;
    }
  }

  async getUrl(ctx: Context) {
    log('getUrl', ctx.params);

    try {
      if (!ctx.params || !ctx.params.shortUrl) {
        throw `404: Not short URL provided`;
      }

      const url = await AppDataSource.getRepository('UrlItem').findOne({
        where: { short: ctx.params.shortUrl }
      });

      if (!url || !url.original) {
        throw `404: No short URL found`;
      }

      ctx.body = url.original;
    } catch (error: any) {
      ctx.status = error.statusCode || error.status || 500;
      ctx.body = error.message;
    }
  }
}

export default new UrlShortenerController();
