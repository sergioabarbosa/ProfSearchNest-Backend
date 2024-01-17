// user.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  confirmPassword: string;

  // Outras propriedades do usuário
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;
