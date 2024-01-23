export class CreateUserDto {
  id?: string;
  username: string;
  name: string;
  userType: string;
  userPlan: string;
  telephone: string;
  cpf: string;
  email: string;
  password: string;
  image?: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
  };
  deletedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
