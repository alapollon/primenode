import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CreateAssetInput } from './create-asset.input';
import { Asset } from '../dto/asset.entity';
import { WranglerService } from './wrangler.service';
import { FileUpload } from 'graphql-upload';

@Resolver(() => Asset)
export class WranglerResolver {
  constructor(private readonly wranglerService: WranglerService) {}

  @Mutation(() => Asset)
  async createAsset(@Args('createAssetInput') createAssetInput: CreateAssetInput): Promise<Asset> {
    const { universalidentity, title, paragraph, media } = createAssetInput;
    const { createReadStream, filename, mimetype, encoding } = await media;

    // Process the file upload (e.g., save it to a storage service)
    const stream = createReadStream();
    // Implement your file upload logic here

    // Create the asset
    const asset = await this.wranglerService.createAsset({
      universalidentity,
      title,
      paragraph,
      media: filename, // Save the filename or URL of the uploaded file
    });

    return asset;
  }
}