import { ConflictException, Injectable } from '@nestjs/common';
import { LongDto, ShortDto } from './dto';
import { DbService } from '../db/db.service';

@Injectable()
export class UrlService {
  constructor(private dbService: DbService) {}

  async getUrl(short: string): Promise<any> {
    const url = await this.dbService.uRL.findUnique({
      where: { short: short },
    });
    if (!url) {
      throw new ConflictException('short URL does not exist');
    }
    // delete record if it's older than 1 day
    if (url.createdAt < new Date(Date.now() - 24 * 60 * 60 * 1000)) {
      this.dbService.uRL.delete({ where: { short: short } });
      throw new ConflictException('URL expired');
    }
    return url;
  }

  async createUrl(email, longUrl: LongDto): Promise<ShortDto> {
    const short = Math.random().toString(36).substring(2, 10); // 8 chars
    console.log(short);
    const url = await this.dbService.uRL.create({
      data: {
        short: short,
        url: longUrl.longUrl,
        userEmail: email,
      },
    });
    if (!url) {
      throw new ConflictException('short URL already exists');
    }
    return { shortUrl: short };
  }

  async getLongUrl(short: string): Promise<string> {
    const url = await this.getUrl(short);
    // increment the click count
    await this.dbService.uRL.update({
      where: { short: short },
      data: { clicks: { increment: 1 } },
    });

    return url.url;
  }

  async getStats(short: string): Promise<any> {
    const url = await this.getUrl(short);
    const stats = {
      longUrl: url.url,
      clicks: url.clicks,
      createdAt: url.createdAt,
      createdBy: url.userEmail,
      timeToLive: 24 - (Date.now() - url.createdAt.getTime()) / 3600000,
    };
    return stats;
  }
}
