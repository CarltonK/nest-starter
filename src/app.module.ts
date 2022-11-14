import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './services/prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { join } from 'path';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // include: [UsersModule],
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql')
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
