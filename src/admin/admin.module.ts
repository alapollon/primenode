import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller'; // Corrected import
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth.guard';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PassportModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        defaultStrategy: 'oauth2',
        session: false,
      }),
    }),
  ],
  providers: [AdminService, AuthGuard],
  controllers: [AdminController], // Corrected name
})
export class AdminModule {

}
