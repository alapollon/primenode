/**
 * The application services DI 
 */


// imported dynamic modules 
import { AuthModule } from './auth/auth.module';
import { BlockchainModule } from './blockchain/blockchain.module';
import { UsersModule } from './users/users.module';
import { WranglerModule } from './wrangler/wrangler.module';

// imported resolvers
import { WranglerResolver } from './wrangler/wrangler.resolver';
import { Module, MiddlewareConsumer, Global  } from '@nestjs/common';
import { LoggingInterceptor } from './interceptors/logger.interceptor';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

// imported global factory 
import { DynamicModule } from '@nestjs/common';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudConnector } from 'cloudflare/resources';
import { HttpExceptionFilter } from './dto/exception.fliter';
import { AppController } from './app.controller';
import AppServices from './app.service';
import { ConfigModule } from '@nestjs/config';
import { BlockchainController } from './blockchain/blockchain.controller';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD, APP_FILTER, APP_PIPE } from '@nestjs/core';
import { AppResolver } from './app.resolver';
import { RouteInput } from './dto/create-route.input';


// Configurations for GraphQLModule with ApolloDriver, for the ; Wrangler module api, Routes Module Api
@Module({
  imports: [
    AuthModule,
    BlockchainModule,
    ThrottlerModule.forRoot({
      
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'ROUTEINTERFACES',
      entities: [RouteInput],
      synchronize: true, 
    }),
    TypeOrmModule.forFeature([RouteInput]),

    WranglerModule,
    ConfigModule.forRoot({
      envFilePath: []
    }),
  ],
  controllers: [ AppController, BlockchainController, ], // Define controllers
  providers: [ ApplicationServices, { provide: APP_GUARD, useClass: ThrottlerGuard}, {provide: APP_FILTER, useExisting: null }], // Define providers
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .forRoutes(AppController, BlockchainController);
  }
}
