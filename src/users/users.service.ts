import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactRecord } from 'src/dto/contact.entity';
import { UsersActivityRecord } from 'src/dto/users.entity';

export type ContactType = ContactRecord;

@Injectable()
export class UsersService {
  profile: {
    id: string,
    name: string,
    email: string,
    cellphone: string,
  };

  activity: {
    id: string,
    logged: string,
    duration: string,
  }

  constructor(
    @InjectRepository(ContactRecord)
    private contactsRepository: Repository<ContactRecord>,

    @InjectRepository(UsersActivityRecord)
    private usersActivityRepository: Repository<UsersActivityRecord>
  ) {}

  async createContactRecord(contactRecord: ContactRecord): Promise<ContactRecord> {
    // Store in SQL database
    const capturedContactRecord = await this.contactsRepository.save(contactRecord);
    return capturedContactRecord;
  }

  getIndividualContactRecord( ): ContactRecord {

    return this.contactsRepository;
  }

  async getAllContactRecord(): Promise<ContactRecord> {

    return this.contactsRepository.find();
  }

  async deleteContactRecord(id: string): Promise<void> {
    // Remove from local repository
     let person = this.contactsRepository.filter(ContactRecord => ContactRecord.id !== id);

    // Remove from SQL database
    if(person === id){await this.contactsRepository.delete(id);}else{
        return 1 }
    
  }
  // return clocking from metalandr 
  async updateUserActivity(id: string, duration: string, BrowserDepiction: string) : Promise<void> {
         do{
           
         }while()
    return(
        this.activity.id = await this.contactsRepository.filter(), 
        this.activity.logged = await this.contactsRepository.filter(
        this.activity.duration = await this.contactsRepository.filter()
        ) 
            
  }
}
