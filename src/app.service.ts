/*
 * This class instantiates the server services.
 * It includes methods for creating routes, processing MAC addresses, and retrieving routes.
 * The class uses a Map to store routes and provides methods to find all routes or a specific route by ID.
 */

//
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// 


import { Express } from 'express';

import { createReadStream, promises as fsPromises } from 'fs';
import { FileService } from './services/file.sevice';
import { MulterOptionsFactory, MulterModuleOptions } from '@nestjs/platform-express';
import { FileStore } from './dto/file.entity';


@Injectable()
export class AppService {
  constructor(
    @InjectRepository( )
    private fileTable: Repository<FileStore>,
    private fileService: FileService,
  ) {


  }
  async getHtml(req:any): Promise<any> {

  }
   async getBundle(req: any): Promise<any> {
    // Customize the upload path based on request parameters or other logic
  }
  async getCascades(req: any): Promise<any> {

  }
  async upload(file: Express.Multer.File): Promise<any> {
    return this.fileService.uploadFile(file);
  }

  async download(filename: string): Promise<any> {
    // return files to buffer by name or uuid
    return this.fileService.downloadFile(filename);
  } 
  async propUpContent(): Promise<any> {

  }

  getHello(name: string): string {
    if (!name) {
      return 'Hello World!';
    } else {
      return 'Hello ' + name;
    }
  }



}