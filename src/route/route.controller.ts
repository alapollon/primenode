import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RoutesService } from './route.service';

@Controller('route')
export class RouteController {
  constructor(private readonly routesService: RoutesService) {}

  @Get()
  findAll() {
    return this.routesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routesService.findOne(id);
  }

  @Post()
  create(@Body() createRouteDto: any) {
    return this.routesService.create(createRouteDto);
  }
}
