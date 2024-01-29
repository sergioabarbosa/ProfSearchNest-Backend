import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(user: User): Promise<User> {
    const { password, ...userWithoutPassword } = user;
    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = new this.userModel({
      ...userWithoutPassword,
      password: hashedPassword,
      created: new Date(),
      updated: new Date(),
      deleted: null,
    });

    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username }).exec();
  }

  async findById(id: string): Promise<User | undefined> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: Partial<User>): Promise<User | null> {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
    return updatedUser;
  }

  async remove(id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(id).exec();
  }

  async updateUserImage(
    userId: string,
    imagePath: string,
  ): Promise<User | null> {
    try {
      const updatedUser = await this.userModel
        .findByIdAndUpdate(
          userId,
          { imagePath }, // Atualize o campo da imagem do usuário
          { new: true }, // Retorna o novo documento atualizado
        )
        .exec();

      return updatedUser;
    } catch (error) {
      console.error('Erro ao atualizar a imagem do usuário:', error.message);
      return null;
    }
  }
}
