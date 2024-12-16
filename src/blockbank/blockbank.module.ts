import { Module } from '@nestjs/common';
import { BlockbankService } from './blockbank.service';
import { BlockbankController } from './blockbank.controller';

@Module({
  providers: [BlockbankService],
  controllers: [BlockbankController]
})
export class BlockbankModule {}
