import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Module({
  providers: [UsersResolver, UsersService, PrismaService],
  controllers: [UsersController]
})
export class UsersModule {}
