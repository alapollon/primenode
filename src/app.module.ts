import { AuthModule } from './auth/auth.module';
import { BlockbankModule } from './blockbank/blockbank.module';
import { UsersModule } from './users/users.module';
import { WranglerModule } from './wrangler/wrangler.module';

// imported services 
import  ServerServices  from './app.service'
import { WranglerResolver } from './wrangler/wrangler.resolver';
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';


import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouteInput } from './dto/create-route.input';
import { ContactRecord } from './dto/contact.entity';
import { UsersActivityRecord } from './dto/users.entity';
import { User } from 'cloudflare/resources';
import { ServerController } from './app.controller';


// Configurations for GraphQLModule with ApolloDriver, for the ; Wrangler module api, Routes Module Api
@Module({
  imports: [
    AuthModule,
    BlockbankModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [RouteInput, ContactRecord, UsersActivityRecord],
      synchronize: true, 
    }),
    TypeOrmModule.forFeature([RouteInput, ContactRecord, UsersActivityRecord]),
    WranglerModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // Use ApolloDriver for Apollo Server integration
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Automatically generate GraphQL schema file
    }),
  ],
  controllers: [ ServerController], // Define controllers
  providers: [ ServerServices, BlockbankServices, WranglerService], // Define providers
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
