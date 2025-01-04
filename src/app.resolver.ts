import ApplicationServices from './app.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { RouteInput } from './dto/create-route.input'; // Define your DTO
import { Route } from './dto/routes.entity'; // Define your entity
import { Content } from 'cloudflare/resources/snippets/content';


@Resolver(() => Content, )
export class AppResolver {
  constructor(private readonly Server: ApplicationServices) {}

  @Query(() => Content, {  })
  @UseGuards()
  getElementProperties(@Args('id', { type: () => String }) id: string) {
    return this.Server.findOneElement(id);
  }

  @Mutation(() => Route, { })
  @UseGuards()
  IdentifyClient(

  ){

  }
  
}