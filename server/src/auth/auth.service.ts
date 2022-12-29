import { ForbiddenException, Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { AuthDto } from './dto';
import * as argon2 from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private db: DbService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async signup(dto: AuthDto) {
    const hashedPassword = await argon2.hash(dto.password);
    try {
      const user = await this.db.user.create({
        data: {
          username: dto.username,
          password_hash: hashedPassword,
        },
      });
      const access_token = this.signToken(user.username);
      return { access_token };
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          throw new ForbiddenException('Username already taken');
        } else {
          throw err;
        }
      }
    }
  }
  async login(dto: AuthDto) {
    const user = await this.db.user.findUnique({
      where: {
        username: dto.username,
      },
    });
    if (!user) {
      throw new ForbiddenException('Invalid username');
    }
    const valid = await argon2.verify(user.password_hash, dto.password);
    if (!valid) {
      throw new ForbiddenException('Invalid password');
    }
    const access_token = this.signToken(user.username);
    return { access_token };
  }

  signToken(username: string) {
    return this.jwt.sign(
      { username },
      { expiresIn: '1d', secret: this.config.get('JWT_SECRET') },
    );
  }
}
