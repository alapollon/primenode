/*
 * This class instantiates the server services.
 * It includes methods for creating routes, processing MAC addresses, and retrieving routes.
 * The class uses a Map to store routes and provides methods to find all routes or a specific route by ID.
 */


import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { RouteInput } from './dto/create-route.input';
import { Express } from 'express';
import { Multer} from 'multer'
import * as fs from 'path';
import * as expo from 'express'
import join from 'path'

import { FileService } from './services/file.sevice';
import { MulterOptionsFactory, MulterModuleOptions } from '@nestjs/platform-express';
import { FileStore } from './dto/file.entity';


@Injectable()
export class AppService {
  constructor(
    @InjectRepository(RouteInput, )
    private routesRepository: Repository<RouteInput>,
    private fileTable: Repository<FileStore>,
    private fileService: FileService,
  ) {}

  private getFilePath(req: any): string {
    // Customize the upload path based on request parameters or other logic
    const directory = req.body.directory || 'default';
    return `./uploads/${directory}`;
  }

  async uploadFile(file: Express.Multer.File): Promise<any> {
    return this.fileService.uploadFile(file);
  }

  async downloadFile(filename: string): Promise<any> {
    // return files into buffer by name or uuid
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