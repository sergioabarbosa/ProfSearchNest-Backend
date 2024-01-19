import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Document & User;

@Schema({ timestamps: true }) // Use timestamps: true para ativar as funcionalidades automáticas de timestamps
export class User {
  @Prop()
  id?: string;

  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  deletedAt?: Date;

  @Prop()
  image?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
