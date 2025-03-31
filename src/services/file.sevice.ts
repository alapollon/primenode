

import { Injectable, HttpException, HttpStatus, Scope } from '@nestjs/common';
import { MulterOptionsFactory, MulterModuleOptions } from '@nestjs/platform-express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Express } from 'express';
import { diskStorage, Multer} from 'multer'

import { safeFile } from './exports/hygine'

import { createReadStream, promises as fsPromises, existsSync, opendirSync as dir } from 'fs';
import { FileStore } from 'src/dto/file.entity;


@Injectable( {} )
export class FileService implements MulterOptionsFactory {
  constructor(
    // attributes of this void 
    @InjectRepository(FileStore)
    private FileTable: Repository<FileStore>,

   

  ) {
    // properties of this void 

    async amendLogRecord(){
      return 0
    }
  } 
  recordEvent() {
    return 0 
  } 
  createMulterOptions(): MulterModuleOptions {
    return {
      storage: diskStorage({
        destination: (req, file, cb) => {
          const uploadPath = null; // ? 
          cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = fs.extname(file.originalname);
          cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
    };
  }
  private getFilePath(req: any): string {
    // Customize the upload path based on request parameters or other logic
    const directory = req.body.directory || 'default';
    return `./uploads/${directory}`;
  }
  async uploadFile(file: Express.Multer.File): Promise<string> {
    const uploadPath = fs.join(__dirname, '..', 'uploads', file.originalname);
    const sanisanitizedFilename = safeFile(file.originalname)
    await fsPromises.writeFile(uploadPath, file.buffer);
    return uploadPath;
  }

  async downloadFile(filename: string): Promise<Buffer> {
    const filePath = fs.join(__dirname, '..', 'uploads', filename);
    try {
      const fileBuffer = await fsPromises.readFile(filePath);
      return fileBuffer;
    } catch (error) {
      throw new HttpException('File not found', HttpStatus.NOT_FOUND);
    }
  }

  
}
