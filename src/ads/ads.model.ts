// anuncio.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from '../users/entities/user.entity';
import { Category } from '../category/category.model'; // Importe o modelo de categoria

export type AnuncioDocument = Document & Anuncio;

@Schema({ timestamps: true })
export class Anuncio {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Category' }) // Use uma referência ObjectId para a categoria
  category: Category;

  // Outros campos necessários para o anúncio

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: null })
  updatedAt: Date;

  @Prop({ type: Date, default: null })
  deletedAt: Date;
}

export const AnuncioSchema = SchemaFactory.createForClass(Anuncio);
