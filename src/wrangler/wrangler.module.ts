import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WranglerService } from './wrangler.service';
import { WranglerController } from './wrangler.controller';
import { GraphQLFactory, GraphQLModule } from '@nestjs/graphql'
import { join } from 'path';
import { PrismaClient } from '@prisma/client';
import { ContactRecord } from 'src/dto/contact.entity';
import ClienteleRecord from 'src/dto/clientele.entity';

/**
 * 
 * This module is for the content delivery resolver 
 * 
 */
@Module({
  imports: [
    PrismaClient, 
    GraphQLModule.forRoot<PrismaClient>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_API_URI, // replace with your MySQL host
      username: process.env.DATABASE_USERNAME, // replace with your MySQL username
      password: process.env.DATABASE_PASSWORD, // replace with your MySQL password
      database: 'Socks', // replace with your MySQL database name
      entities: [ClienteleRecord],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ClienteleRecord])
  ],
  providers: [WranglerService],
  controllers: [WranglerController],
  exports: [WranglerService, GraphQLFactory],
})
export class WranglerModule {
  async portal() {
    return WranglerController;
  }
}
    