// jwt-payload.interface.ts

export interface JwtPayload {
  name: string;
  sub: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  // Adicione outros campos conforme necessário
}
