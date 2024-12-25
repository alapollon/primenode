import { Controller, Get, Post, Body, Param, UploadedFile, UseInterceptors, UseGuards } from '@nestjs/common';
import AppService from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { Express } from 'express';

@Controller('app')
@UseGuards(AuthGuard('oauth2'))
export class ClientController {
  constructor(private readonly appService: AppService) {
    
  }
  

  // findone provoke graphql mutated responses 
  @Get(':id')
  findOne(@Param('id') id: string) {

    return this.appService.findOnelink(id);
  }

  @Post()
  create(@Body() createRouteDto: any) {
    return this.appService.createRoute(createRouteDto);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File): void {
    console.log('uploading ' + file);
    // Add your logic here
  }
}