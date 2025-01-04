import { Controller, Get, Post, Body, Param, UploadedFile, UseInterceptors, UseGuards } from '@nestjs/common';
import {AppService} from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { Express } from 'express';

@Controller('app')
@UseGuards(AuthGuard('oauth2'))
export class AppController {
  constructor(private readonly appService: AppService) {
    
  }
  //
  @Get('greeting')
  Hello(){
      return this.appService.getHello('user')
  }
  // 
  @Get('id')
  fetchElementAttributes(@Param('id') id: string): Promise<string>  {

    return this.appService.propUpContent();
  }
  //
  //
  @Post('download')
  @UseInterceptors(FileInterceptor('file'))
  upstream(@UploadedFile() file: Express.Multer.File): Promise<void> {

    console.log('upsteam ' + file);
    // Add your logic here
    return null
  }
}