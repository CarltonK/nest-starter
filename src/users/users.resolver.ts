import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UserCreateInput } from './dto/user-create-input';

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
