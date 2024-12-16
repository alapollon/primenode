import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { verify } from 'jsonwebtoken'; // Assuming JWT is used for SSO

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;

    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header is missing');
    }

    const token = authHeader.split(' ')[1];
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