import { CloudflareService } from '@clo'
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import {PrismaClient} from '@prisma'
interface Asset {
  id: string;
  name: string;
  media: string;
}

const createAsset = (id: string, element: string, link: string): Asset => {
  return { id, name: element, media: link };
};

const assets = (id: string, element: string, link: string): Asset[] => {
  return [createAsset(id, element, link)];
};

@Injectable()
export class WranglerService extends PrismaClient {
  private assets: Asset[] = [];

  constructor(private readonly cloudflareService: CloudflareService) {
    // set up compliance defense strategies
  }

  createAsset(name: string, media: string): Asset {
    const id = uuidv4();
    const asset = { id, name, media };
    this.assets.push(asset);
    return asset;
  } async RDBMSonlineModule(){
      await this.$connect(); 
  } async DBMSonlineModule (){
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

  async createCloudflareAsset(zoneId: string, assetName: string, assetContent: string): Promise<any> {
    return this.cloudflareService.createAsset(zoneId, assetName, assetContent);
  }

  async getCloudflareAsset({ zoneId, assetId }: { zoneId: string; assetId: string }): Promise<any> {
    return this.cloudflareService.getAsset(zoneId, assetId);
  }

  public executeAssets(id: string, element: string, link: string): Asset[] {
    return assets(id, element, link);
  }
}

export default WranglerService;