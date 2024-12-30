import { AuthModule } from './auth/auth.module';
import { BlockbankModule } from './blockbank/blockbank.module';
import { UsersModule } from './users/users.module';
import { WranglerModule } from './wrangler/wrangler.module';

// imported services 
import { AuthService } from './auth.service';
import { BlockchainServices } from './blockbank/blockbank.service';
import  ServerServices  from './app.service'
import { UsersService } from './users/users.service';
import WranglerService from './wrangler/wrangler.service';

// imported resolvers
import { WranglerResolver } from './wrangler/wrangler.resolver';
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './logger.interceptor';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

// imported global factory 
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouteInput } from './dto/create-route.input';
import { ContactRecord } from './dto/contact.entity';
import { UsersActivityRecord } from './dto/users.entity';
import { User } from 'cloudflare/resources';
import { HttpExceptionFilter } from 'exception.filter';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
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
    WranglerModule.for,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // Use ApolloDriver for Apollo Server integration
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Automatically generate GraphQL schema file
    }),
  ],
  controllers: [ ServerController], // Define controllers
  providers: [ AuthServices, BlockbankServices, ServerServices, WranglerService], // Define providers
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
