import { Inject, Injectable } from '@nestjs/common';
import { Args, Context, Field, InputType } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { PrismaService } from 'src/services/prisma/prisma.service';import { UpdateUserInput } from './dto/update-user.input';
;


@Injectable()
export class UsersService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) { }

  async signUpUser(data: any): Promise<User> {
    return this.prismaService.user.create({
      data: {
        email: data.email,
        name: data.name,
      },
    })
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
