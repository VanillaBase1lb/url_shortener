import { IsNotEmpty, IsString } from 'class-validator';

export class LongDto {
  @IsString()
  @IsNotEmpty()
  longUrl: string;
}

export class ShortDto {
  @IsString()
  @IsNotEmpty()
  shortUrl: string;
}
