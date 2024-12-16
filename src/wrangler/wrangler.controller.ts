import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Asset } from './wrangler.service';
import { CloudflareService } from './wrangler.service';
import { WranglerService } from './wrangler.service';
import { async } from 'rxjs';

@Controller('wrangler')
export class WranglerController {
  constructor(
    private readonly wranglerService: WranglerService,
    private readonly cloudflareService: CloudflareService
  ) {}

  @Post()
/**
 * Creates a new asset using the provided data.
 * 
 * @param createAssetDto - An object containing the name and media of the asset to be created.
 * @param createAssetDto.name - The name of the asset.
 * @param createAssetDto.media - The media associated with the asset.
 * @returns The result of the asset creation process.
  create(@Body() createAssetDto: { name: string; media: string }): Promise<Asset> {
  create(@Body() createAssetDto: { name: string; media: string }) {
    return this.wranglerService.createAsset(createAssetDto.name, createAssetDto.media);
  }

  @Get()
/**
 * Retrieves all assets.
 *
 * @returns {Asset[]} An array of assets.
 */
  findAll(): Asset[] {
    return this.wranglerService.findAll();
  }

  @Get(':id')
/**
 * Retrieves a single wrangler entity by its ID.
 * 
 * @param id - The unique identifier of the wrangler entity to retrieve.
 * @returns The wrangler entity with the specified ID.
 */
  findOne(@Param('id') id: string) {
    return this.wranglerService.findOne(id);
  }
  async createCloudflareAsset(zoneId: string, assetName: string, assetContent: string): Promise<any> {
    return this.cloudflareService.createAsset(zoneId, assetName, assetContent);
  }

  async getCloudflareAsset(zoneId: string, assetId: string): Promise<any> {
    return this.cloudflareService.getAsset(zoneId, assetId);
  }
}

function getCloudflareAsset(zoneId: any, string: any, assetId: any, string1: any) {
    throw new Error('Function not implemented.');
}
