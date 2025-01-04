import { ExecutionContext, Injectable, Scope } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GqlExecutionContext } from '@nestjs/graphql';
import { validate } from 'graphql';
import { Strategy } from 'passport-oauth2';

// todo: dynamicaly aggregate 
import { UsersService } from 'src/users/users.service';

// imported independencies 
import { PassportSerializer, PassportStrategy } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { verify } from 'crypto';


@Injectable({scope: Scope.TRANSIENT})
export class AuthorityService extends LocalStrategy {
  constructor(
    private context: ExecutionContext

  ) {
     const ctx = GqlExecutionContext.create(context);
     const req = ctx.getContext().req;
     const authHeader = req.headers.authorization;
    }
    authenticateUser(){
        let api_token = authHeader.split(' ')[1];
    try {
      const decoded = verify(token, process.env.JWT_SECRET); // Verify the JWT token
      if (decoded.role !== 'admin') {
        throw new UnauthorizedException('User is not an administrator');
      }
      req.user = decoded; // Attach the decoded user to the request
      return true;
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
    }
  } 


}