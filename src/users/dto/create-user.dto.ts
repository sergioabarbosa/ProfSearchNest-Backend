export class CreateUserDto {
  id?: string;
  username: string;
  name: string;
  email: string;
  password: string;
  image?: string; // Suponha que a imagem seja uma URL ou um caminho para a imagem
  timeStamps: {
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
  };
}
