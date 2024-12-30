import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ContactRecord } from './contact-record.entity';
import { Repository } from 'typeorm';

describe('UsersService', () => {
  let service: UsersService;
  let contactRecordRepository: Repository<ContactRecord>;

  const mockContactRecordRepository = {
    save: jest.fn(),
    find: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(ContactRecord),
          useFactory: () => mockContactRecordRepository,
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
    const incomingContactRecord = {
      id: 'mock',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      macaddress: '00:1B:44:11:3A:B7',
      landinurl: 'http://example.com',
      linkedinurl: 'http://linkedin.com/in/johndoe',
      xdoturl: 'http://xdot.com/johndoe',
      advertisementIdentity: 'ad-123',
    };
    mockContactRecordRepository.save.mockResolvedValue(incomingContactRecord);

    const result = await service.createContactRecord(incomingContactRecord);
    expect(result).toEqual(incomingContactRecord);
  });

  it('should get all contact records', async () => {
    const contactRecords = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        macaddress: '00:1B:44:11:3A:B7',
        landinurl: 'http://example.com',
        linkedinurl: 'http://linkedin.com/in/johndoe',
        xdoturl: 'http://xdot.com/johndoe',
        advertisementIdentity: 'ad-123',
      },
    ];
    mockContactRecordRepository.find.mockResolvedValue(contactRecords);

    const result = await service.getAllContactRecords();
    expect(result).toEqual(contactRecords);
  });

  it('should delete a contact record', async () => {
    const id = '1';
    mockContactRecordRepository.delete.mockResolvedValue({ affected: 1 });

    await service.deleteContactByRecords(id);
    expect(mockContactRecordRepository.delete).toHaveBeenCalledWith({ id });
  });
});
