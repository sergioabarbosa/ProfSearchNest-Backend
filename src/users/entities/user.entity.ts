import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Anuncio } from '../../ads/ads.model'; // Certifique-se de importar corretamente o modelo de Anuncio

export type UserDocument = Document & User;

@Schema({ timestamps: true })
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

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Anuncio' }] })
  anuncios?: Anuncio[];
}

export const UserSchema = SchemaFactory.createForClass(User);
