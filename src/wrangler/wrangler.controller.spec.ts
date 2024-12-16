import { Test, TestingModule } from '@nestjs/testing';
import { WranglerController } from './wrangler.controller';

describe('WranglerController', () => {
  let controller: WranglerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WranglerController],
    }).compile();

    controller = module.get<WranglerController>(WranglerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
