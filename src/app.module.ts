import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';


import { AdminModule } from './admin/admin.module' 
import { BlockbankModule } from './blockbank/blockbank.module';
import { WranglerModule } from './wrangler/wrangler.module';
import {  Route } from './dto/routes.entity';
import { join } from 'path';

import { AppController  } from './app.controller';
import { WranglerController } from './wrangler/wrangler.controller';
import { AdminController } from './admin/admin.controller';
import { BlockbankController } from './blockbank/blockbank.controller';
import { BlockbankService } from './blockbank/blockbank.service';
import WranglerService from './wrangler/wrangler.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clientele } from './dto/clientel.entity';


// Configurations for GraphQLModule with ApolloDriver, for the ; Wrangler module api, Routes Module Api
@Module({
  imports: [
    AdminModule,
    BlockbankModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Route, Clientele],
      synchronize: true, 
    }),
    TypeOrmModule.forFeature([Route]),
    WranglerModule.,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // Use ApolloDriver for Apollo Server integration
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Automatically generate GraphQL schema file
    }),
  ],
  controllers: [AppController, AdminController, BlockbankController, WranglerController], // Define controllers
  providers: [AppService, BlockbankService, WranglerService], // Define providers
})
export class AppModule {}
