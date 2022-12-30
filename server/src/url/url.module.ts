import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';

@Module({
  controllers: [UrlController],
  providers: [UrlService],
  imports: [DbModule],
})
export class UrlModule {}
