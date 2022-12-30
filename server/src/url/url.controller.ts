import {
  Controller,
  UseGuards,
  Post,
  Body,
  Req,
  Get,
  Param,
  Redirect,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LongDto } from './dto';
import { UrlService } from './url.service';
import { Request } from 'express';

@Controller('url')
export class UrlController {
  constructor(private urlService: UrlService) {}

  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  createUrl(@Req() req: Request, @Body() longUrl: LongDto) {
    return this.urlService.createUrl(req.user, longUrl);
  }

  @Get(':short')
  @Redirect()
  async getLongUrl(@Param('short') short: string) {
    const longUrl = await this.urlService.getLongUrl(short);
    return { url: longUrl };
  }

  @Get('stats/:short')
  @UseGuards(AuthGuard('jwt'))
  async getStats(@Param('short') short: string) {
    return this.urlService.getStats(short);
  }
}
