// create-user.dto.ts
import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly confirmPassword: string;

  // Outros campos, se necessário
}
