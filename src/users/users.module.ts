
import { Module, DynamicModule} from '@nestjs/common';
import { WranglerModule } from 'src/wrangler/wrangler.module';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactRecord } from 'src/dto/contact.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.DATABASE_API_URI, // replace with your MySQL host
        username: process.env.DATABASE_USERNAME, // replace with your MySQL username
        password: process.env.DATABASE_PASSWORD, // replace with your MySQL password
        database: 'ContactBook', // replace with your MySQL database name
        entities: [ContactRecord],
        synchronize: true,
    }),
    
  ],
  providers: [UsersService],
  exports: [],
})
export class UsersModule {
    static forRoot
}
