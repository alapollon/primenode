import { Module, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';
import { ApplicationsController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AdminController } from './admin/admin.controller';
import { BlockbankController } from './blockbank.controller';
import { WranglerController } from './wrangler.controller';
import { ServerApplicationServices } from './app.service';
import { ClientController } from './app.controller';
import { AdminModule } from './admin.module';
import { BlockbankModule } from './blockbank.module';
import { BlockbankService } from './blockbank.service';
import { join } from 'path';

import WranglerService from './wrangler/wrangler.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clientele } from './dto/clientele.entity';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AdminDeleteModule } from './admin--delete/admin--delete.module';


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
    WranglerModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // Use ApolloDriver for Apollo Server integration
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Automatically generate GraphQL schema file
    }),
    UsersModule,
    AuthModule,
    AdminDeleteModule,
  ],
  controllers: [ClientController, AdminController, BlockbankController, WranglerController], // Define controllers
  providers: [ServerApplicationServices, BlockbankService, WranglerService, UsersService], // Define providers
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(ClientController);
      .forEach(element => {
        // todo: install logic for blockchain controller 
      });
  }
}
