import { Controller, Get, Post, Body, Param, UploadedFile, UseInterceptors, UseGuards } from '@nestjs/common';
import ApplicationService from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { Express } from 'express';

@Controller('app')
@UseGuards(AuthGuard('oauth2'))
export class ServerController {
  constructor(private readonly appService: ApplicationService) {
    
  }
  

  // findone provoke graphql mutated responses 
  @Get(':id')
  findOne(@Param('id') id: string) {

    return this.appService.findOneElement(id);
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