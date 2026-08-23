import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name is required.' })
  @IsString({ message: 'Name must be a string.' })
  name!: string;

  @IsNotEmpty({ message: 'E-mail is required.' })
  @IsEmail({}, { message: 'Invalid e-mail format.' })
  email!: string;

  @IsNotEmpty({ message: 'Password is required.' })
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long.' })
  password!: string;
}