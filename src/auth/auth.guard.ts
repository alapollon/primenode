import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import {AuthorityService} from './auth.service';




@Injectable()
export class AuthorityGuard implements CanActivate {
  constructor(
    private readonly tokenIdentified: typeof AuthorityService.prototype.authenticateClientToken,
    private  User_Pid : typeof AuthorityService.prototype.authenticatePassword,
    private validateSso : typeof AuthorityService.prototype,
  ){
    const tokenObservable = this.tokenIdentified
    const keyValueObservable = this.User_Pid
    const ssoObservable = validateSso
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
     
    }

    
  }
}