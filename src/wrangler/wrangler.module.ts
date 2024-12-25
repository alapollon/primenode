import { Module } from '@nestjs/common';
import { WranglerService } from './wrangler.service';
import { WranglerController } from './wrangler.controller';
import { GraphQLFactory, GraphQLModule } from '@nestjs/graphql'
import { join } from 'path';
import { PrismaClient } from '@prisma/client';

/**
 * 
 * This module polymorphs a content delivery network 
 * manager 
 */
@Module({
  imports: [PrismaClient, GraphQLModule],
    
  providers: [WranglerService],
  controllers: [WranglerController],
  exports: [WranglerService, GraphQLFactory],
})
export class WranglerModule {}
    