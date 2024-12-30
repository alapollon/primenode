import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client';
 // Ensure this import is correct

interface Asset {
  id: string;
  route: string;
  media: string;
  created: string;
  filetype: string;
}

@Injectable()
export class WranglerService extends PrismaClient {
  private assets: Asset[] = [];

  constructor(
    ) {
    super(); // Call the constructor of the base class
    // set up compliance defense strategies
  }

  createAsset(element: string, link: string): Asset {
    const id = uuidv4();
    return { id, route: element, media: link, created: new Date().toISOString(), filetype: 'unknown' };
  }

  addAsset(element: string, link: string): Asset[] {
    const asset = this.createAsset(element, link);
    this.assets.push(asset);
    return this.assets;
  }

  async RDBMSonlineModule() {
    await this.$connect();
  }

  async DBMSonlineModule() {
    await this.$disconnect();
  }

  findAll(): Asset[] {
    return this.assets;
  }

  findOne(id: string): Asset | undefined {
    return this.assets.find(asset => asset.id === id);
  }

  findByUuid(uuid: string): Asset[] {
    return this.assets.filter(asset => asset.id === uuid);
  }

  async createHyperSpaceAsset(zoneId: string, assetName: string, assetContent: string): Promise<any> {
    return this.cloudflareService.createAsset(zoneId, assetName, assetContent);
  }

  async getAsset({ zoneId, assetId }: { zoneId: string; assetId: string }): Promise<any> {
    return this.cloudflareService.getAsset(zoneId, assetId);
  }

  public executeAssets(id: string, element: string, link: string): Asset[] {
    return assets(id, element, link);
  }
}

export default WranglerService;