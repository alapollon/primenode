import { Test, TestingModule } from '@nestjs/testing';
import { BlockbankController } from './blockbank.controller';

describe('BlockbankController', () => {
  let controller: BlockbankController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlockbankController],
    }).compile();

    controller = module.get<BlockbankController>(BlockbankController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
