import { Injectable, BadRequestException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { Response } from "express";

import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";

import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async register(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;

    const userExists = await this.prisma.user.findUnique({
      where: { email }
    });

    if (userExists) {
      throw new BadRequestException('E-mail is already in use.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      }
    });

    return {
      message: 'Successfully registered user.',
      user,
    }
  }

  async login(loginUserDto: LoginUserDto, res: Response) {
    const { email, password } = loginUserDto;

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) { throw new BadRequestException('E-mail or password invalid.'); }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) { throw new BadRequestException('E-mail or password invalid.'); }

    const payload = { sub: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    });

    return {
      message: 'Login successfully.',
      user
    }
  }
}