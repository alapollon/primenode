import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WranglerService } from './wrangler.service';
import { async } from 'rxjs';

@Controller('wrangler')
export class WranglerController {
  constructor(
    private readonly wranglerService: WranglerService,
    
  ){

  }

} 

