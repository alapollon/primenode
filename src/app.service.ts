/*
 * This is the AppService class which handles the business logic for the application.
 * It includes methods for creating routes, processing MAC addresses, and retrieving routes.
 * The class uses a Map to store routes and provides methods to find all routes or a specific route by ID.
 */


import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { CreateRouteInput } from './dto/create-route.input';
import { Route } from './dto/routes.entity';
import { Clientele } from './dto/clientele.entity';


@Injectable()
export default class AppService {
  constructor(
    // url locality  
    @InjectRepository(Route)
    private routesRepository: Repository<Route>,
    //  client intelligence 
    @InjectRepository(Clientele)
    private clientRepository: Repository<Clientele>,
    

  ) {}
  // trad
  getHello(): string {
    return 'Hello Wilfred!';
  }
  // generates map for uurl 
  async createRoute(createRouteInput: CreateRouteInput): Promise<Route> {
    const route = this.routesRepository.create({
      id: uuidv4(),
      ...createRouteInput,
    });
    return (await this.routesRepository.save(route))[0];
  }
  // find all function is only for local non-sql maps
  async findAll(): Promise<Route[]> {
    return this.routesRepository.find();
  }

  // find one is for both local and remote mapping 
  async findOnelink(id: string): Promise<Route> {
    return this.routesRepository.findOne(id);
  }

  // locally scoped by admin guard 
  async deleteByUuidOrPath(identifier: string, myboolean ): Promise<void> {
    const route = await this.routesRepository.findOne({
      where: [{ id: identifier }, { path: identifier }],
    });
    if (route) {
      await this.routesRepository.remove(route);
    }
  }

  async UploadingDataRecords() {
    const file = require('fs');

    file.readFile 
  }

  processMacAddress(macAddress: string): string {
    // Add any processing logic here
    return `Processed MAC address: ${macAddress}`;
  }
}