import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username, pass) {
    console.log('Credenciais fornecidas:', { username, pass });
    const user = await this.usersService.findOne(username);

    if (!user || user.password !== pass) {
      // Se o usuário não existe ou a senha está incorreta, lance uma exceção Unauthorized
      throw new UnauthorizedException();
    }

    // Certifique-se de que 'user' é um objeto válido com a propriedade 'id'
    // if (!user.id) {
    //   throw new Error('Usuário não tem uma propriedade "id" válida.');
    // }

    const payload = { sub: user.id, username: user.username };

    return {
      'Usuário logado com sucesso!': user,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
