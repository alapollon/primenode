import { Module } from '@nestjs/common';
import { WranglerService } from './wrangler.service';
import { WranglerController } from './wrangler.controller';
import { PrismaService } from 'src/prisma.service';

import { GraphQLFactory, GraphQLModule } from '@nestjs/graphql'
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver, // Use ApolloDriver for Apollo Server integration
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Automatically generate GraphQL schema file
  }),],
  providers: [WranglerService, PrismaService],
  controllers: [WranglerController, GraphQLModule],
  exports: [WranglerService, GraphQLFactory],
})
export class WranglerModule {}
    