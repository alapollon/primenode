import ApplicationServices from './app.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { RouteInput } from './dto/create-route.input'; // Define your DTO
import { Route } from './dto/routes.entity'; // Define your entity
import { AuthGuard } from './auth.guard'; // Import the AuthGuard

@Resolver(() => Route)
export class ServiceResolver {
  constructor(private readonly Server: ApplicationServices) {}

  @Query(() => Route, { name: 'route' })
  @UseGuards(AuthGuard)
  getElementProperties(@Args('id', { type: () => String }) id: string) {
    return this.Server.findOneElement(id);
  }

  @Query(() => Route, {name: 'route'})
  @UseGuards(AuthGuard)

}