import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Anuncio } from '../../ads/ads.model';

export type UserDocument = Document & User;

@Schema({ timestamps: true })
export class Address {
  @Prop()
  street: string;

  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop()
  postalCode: string;
}

@Schema({ timestamps: true })
export class User {
  @Prop()
  id?: string;

  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop()
  cpf: string;

  @Prop()
  userType: string;

  @Prop()
  userPlan: string;

  @Prop({ type: Address })
  address: Address;

  @Prop()
  telephone: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  deletedAt?: Date;

  @Prop()
  image?: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Anuncio' }] })
  anuncios?: Anuncio[];
}

export const UserSchema = SchemaFactory.createForClass(User);
