import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';
import { UrlModule } from './url/url.module';

@Global()
@Module({
  imports: [
    AuthModule,
    DbModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UrlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
