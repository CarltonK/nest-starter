import { PartialType } from '@nestjs/mapped-types';
import { UserCreateInput } from './user-create-input';

export class UpdateUserInput extends PartialType(UserCreateInput) {
  id: number;
}
