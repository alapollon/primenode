import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { RouteService } from './route/route.service';
import { CreateRouteInput } from './dto/create-route.input'; // Define your DTO
import { Route } from './entities/route.entity'; // Define your entity
import { AuthGuard } from '../auth/auth.guard'; // Import the AuthGuard

@Resolver(() => Route)
export class RouteResolver {
  constructor(private readonly routeService: RouteService) {}

  @Query(() => [Route], { name: 'routes' })
  @UseGuards(AuthGuard)
  findAll() {
    return this.routeService.findAll();
  }

  @Query(() => Route, { name: 'route' })
  @UseGuards(AuthGuard)
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.routeService.findOne(id);
  }

  @Mutation(() => Route)
  @UseGuards(AuthGuard)
  createRoute(@Args('createRouteInput') createRouteInput: CreateRouteInput) {
    return this.routeService.create(createRouteInput);
  }
}