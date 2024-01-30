import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username, password, req) {
    // Adicione 'req' como parâmetro
    console.log('Credenciais fornecidas:', { username, password });
    const user = await this.usersService.findOne(username);

    if (!user || !(await this.comparePasswords(password, user.password))) {
      // Se o usuário não existe ou a senha está incorreta, lance uma exceção Unauthorized
      throw new UnauthorizedException('Credenciais inválidas');
    }

    // Atribuir o usuário autenticado à requisição
    req.user = user;

    const payload = { sub: user.id, username: user.username };

    return {
      'Usuário logado com sucesso!': user,
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  private async comparePasswords(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainTextPassword, hashedPassword);
  }
}
