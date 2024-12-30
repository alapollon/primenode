
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { AuthGuard, PassportModule } from '@nestjs/passport';
@Module({
  imports: [UsersModule, PassportModule.register({defaultStrategy: 'oauth2'})],
  providers: [AuthService, AuthGuard()],
})
export class AuthModule {

}
