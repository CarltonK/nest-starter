import { Resolver, Query, Mutation, Args, InputType, Field } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Inject } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { User } from './entities/user.entity';
import { Context } from '@nestjs/graphql';


@InputType()
class UserCreateInput {
  @Field()
  email: string

  @Field({ nullable: true })
  name: string
}

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

  @Mutation((returns) => User)
  signUpUser(@Args('createUserInput') createUserInput: UserCreateInput) {
    return this.usersService.signUpUser(createUserInput);
  }

  @Query((returns) => [User], { nullable: true })
  allUsers() {
    return this.usersService.findAll();
  }
}
