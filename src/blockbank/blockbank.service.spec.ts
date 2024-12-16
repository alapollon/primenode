import { Test, TestingModule } from '@nestjs/testing';
import { BlockbankService } from './blockbank.service';

describe('BlockbankService', () => {
  let service: BlockbankService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlockbankService],
    }).compile();

    service = module.get<BlockbankService>(BlockbankService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
