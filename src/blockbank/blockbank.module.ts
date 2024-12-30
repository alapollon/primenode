import { Module } from '@nestjs/common';
import { BlockchainService } from './blockbank.service';
import { BlockbankController } from './blockbank.controller';

@Module({
  providers: [BlockchainServices],
  controllers: [BlockbankController]
})
export class BlockbankModule {}
