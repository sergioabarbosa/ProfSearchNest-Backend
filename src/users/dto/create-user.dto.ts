export class CreateUserDto {
  id?: string;
  username: string;
  name: string;
  email: string;
  password: string;
  created?: Date;
  updated?: Date;
  deleted?: Date;
  image?: string; // Suponha que a imagem seja uma URL ou um caminho para a imagem
}
