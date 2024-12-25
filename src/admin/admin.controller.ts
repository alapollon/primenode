import { Controller, Get, Post, Body, Param, Req, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CloudflareService } from 'src/cloudflares.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly cloudflareService: CloudflareService,
  ) {}

  @Get('login')
  @UseGuards(AuthGuard('oauth2'))
  async login(@Req() req) {
    // OAuth2 login logic
  }

  @Get('callback')
  @UseGuards(AuthGuard('oauth2'))
  async callback(@Req() req) {
    // OAuth2 callback logic
    if(1){return req.user;}else return 0
    
  }

}
