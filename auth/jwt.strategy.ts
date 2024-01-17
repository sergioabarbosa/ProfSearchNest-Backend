import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'your_secret_key', // Substitua com sua chave secreta
    });
  }

  async validate(payload: JwtPayload): Promise<any> {
    // Aqui você pode fazer alguma validação adicional, como verificar se o usuário ainda existe no banco de dados
    // Substitua este exemplo com sua lógica real

    return { userId: payload.sub, username: payload.username };
  }
}
