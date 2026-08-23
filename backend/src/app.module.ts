import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule, 
    JwtModule.register({ 
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
     }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
