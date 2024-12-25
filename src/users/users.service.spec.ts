import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// aggregation
import { ContactRecord } from 'src/dto/contact.entity';

const mockContactRecordRepository = () => ({
  find: jest.fn(),
  findOne: jest.fn(),
  save: jest.fn(),
  delete: jest.fn(),
});

describe('UsersService', () => {
  let service: UsersService;
  let contactRecordRepository: Repository<ContactRecord>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(ContactRecord),
          useFactory: mockContactRecordRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    contactRecordRepository = module.get<Repository<ContactRecord>>(getRepositoryToken(ContactRecord));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a contact record', async () => {
    const contactRecord = { id: '1', name: 'John Doe', email: 'john@example.com', cellphone: '1234567890' };
    contactRecordRepository.save.mockResolvedValue(contactRecord);

    const result = await service.createContactRecord(contactRecord as ContactRecord);
    expect(result).toEqual(contactRecord);
  });

  it('should get all contact records', async () => {
    const contactRecords = [{ id: '1', name: 'John Doe', email: 'john@example.com', cellphone: '1234567890' }];
    contactRecordRepository.find.mockResolvedValue(contactRecords);

    const result = await service.getAllContactRecords();
    expect(result).toEqual(contactRecords);
  });

  it('should delete a contact record', async () => {
    const id = '1';
    contactRecordRepository.delete.mockResolvedValue({ affected: 1 });

    await service.deleteContactRecord(id);
    expect(contactRecordRepository.delete).toHaveBeenCalledWith(id);
  });
});
