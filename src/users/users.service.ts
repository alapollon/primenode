import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactRecord } from 'src/dto/contact.entity';
import { UsersActivityRecord } from 'src/dto/users.entity';
import { elementAt } from 'rxjs';
import { profile } from 'console';



interface Profile{
    id: string,
    macaddress: string, 
    name: string,
    email: string,
    phone: string, 
    landinurl: string,
    linkedinurl: string 
    xdoturl: string, 
    advertisementIdentity: string;
}
interface userActivity {
    keytoken: string;
    dateAccessed: string, 
    duration: string,
    BrowserDepiction: string,
    DeviceType: string, 

}
@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(ContactRecord)
    private contactsRepository: Repository<ContactRecord>,

    @InjectRepository(UsersActivityRecord)
    private usersActivityRepository: Repository<UsersActivityRecord>
  ) {}

  async createContactRecord(contactRecord): Promise<ContactRecord> {
    // Store in SQL database
    const record = contactRecord
    try{ await this.contactsRepository.save(contactRecord); return record }catch{

    }
    
  }

  async getIndividualContactRecord(contactRecordID: string): Promise<ContactRecord> {
    const profile = await this.contactsRepository.findOne({ where: { id: contactRecordID } });
    if (!profile) {
      throw new Error('Contact record not found');
    }
    return profile;
  }

  async getAllContactRecords(): Promise<ContactRecord[]> {
    return await this.contactsRepository.find();
  }

  async deleteContactByRecords(contactRecordID: string): Promise<void> {
    await this.contactsRepository.delete(contactRecordID); 
  }
  async setContactPassword(): Promise<void> {

  }
  async 
}

export { Profile, userActivity }