import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule, 
    JwtModule.register({ 
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
     }),
     ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 5
      },
     ]),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
